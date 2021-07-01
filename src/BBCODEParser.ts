import { TagHandler } from './tag/TagHandler';

const STATE_NORMAL = 0;
const STATE_BBCODE_OPEN_START = 1;
const STATE_BBCODE_CLOSE_START = 2;
const TYPE_TEXT = 0;
const TYPE_BBCODE_OPEN = 1;

export class BBCODEParser {
    readonly TAG_HANDLER_MAP: { [key: string]: TagHandler } = {};
    readonly TAG_ALIASES_MAP: { [key: string]: string } = {};

    transformAsIs(tagName: string, arg: string, content: string): string {
        let openTag;
        if (arg) {
            openTag = `${tagName}=${arg}`;
        } else {
            openTag = tagName;
        }
        return `[${openTag}]${content}[/${tagName}]`;
    }

    transformTag(tagLabel: string, content: string, arg: string): string {
        if (!content) {
            return '';
        }
        const tagName = this.TAG_ALIASES_MAP[tagLabel.substring(1)];
        if (!tagName) {
            return this.transformAsIs(tagLabel, arg, content);
        }

        const handler = this.TAG_HANDLER_MAP[tagName];
        if (handler) {
            const result = handler.handle(tagName, arg, content);
            if (result) {
                return result;
            }
        }
        return this.transformAsIs(tagName, arg, content);
    }

    filterXSS(str: string): string {
        return str
            .replace(/&/g, '&amp;')
            .replace(/</g, '&lt;')
            .replace(/>/g, '&gt;')
            .replace(/"/g, '&quot;')
            .replace(/'/g, '&#39;');
    }

    registerTagHandler(handler: TagHandler) {
        this.TAG_HANDLER_MAP[handler.tagName] = handler;
        this.TAG_ALIASES_MAP[handler.tagName] = handler.tagName;
    }

// TODO 自定义解析：标签内部嵌套的所有东西都交给自定义解析器，可以自行处理内容解析。用途：[code][/code]、[list][*]xx[/list]
// TODO 特殊解析：[code]标签应该忽略正常的闭合标签，直到找到了[/code]或者到达字符串末尾
    bbcode2html(rawContent: string): string {
        rawContent = rawContent.replace(/ /g, '&nbsp;');

        // TODO any改接口
        const stack: any[] = [];
        let state = STATE_NORMAL;
        let tmp = '';
        for (let idx = 0; idx < rawContent.length; idx++) {
            const char = rawContent[idx];
            switch (char) {
                case '[': {
                    if (state === STATE_NORMAL && idx < rawContent.length) {
                        if (tmp.length > 0) {
                            stack.push({type: TYPE_TEXT, value: tmp});
                            tmp = '';
                        }
                        tmp = '[';
                        if (rawContent[idx + 1] === '/') {
                            state = STATE_BBCODE_CLOSE_START;
                            idx++;
                        } else {
                            state = STATE_BBCODE_OPEN_START;
                        }
                    } else if (state === STATE_BBCODE_OPEN_START || state === STATE_BBCODE_CLOSE_START) {
                        if (tmp.length > 0) {
                            stack.push({type: TYPE_TEXT, value: tmp});
                            tmp = '[';
                        }
                    } else {
                        tmp += char;
                    }
                    break;
                }
                case ']': {
                    if (state === STATE_BBCODE_OPEN_START) {
                        let arg;
                        const argIdx = tmp.indexOf('=');
                        if (argIdx > 0) {
                            arg = tmp.substring(argIdx + 1);
                            tmp = tmp.substring(0, argIdx);
                        }
                        stack.push({type: TYPE_BBCODE_OPEN, value: tmp, arg: arg});
                        tmp = '';
                        state = STATE_NORMAL;
                    } else if (state === STATE_BBCODE_CLOSE_START) {
                        let content = '';
                        let successClosed = false;
                        out: while (true) {
                            const node = stack.pop();
                            if (!node) {
                                break;
                            }
                            switch (node.type) {
                                case TYPE_TEXT: {
                                    content = node.value + content;
                                    break;
                                }
                                case TYPE_BBCODE_OPEN: {
                                    if (node.value === tmp) {
                                        stack.push({
                                            type: TYPE_TEXT,
                                            value: this.transformTag(node.value, content, node.arg)
                                        });
                                        content = '';
                                        successClosed = true;
                                        break out;
                                    } else {
                                        content = this.transformTag(node.value, content, node.arg);
                                    }
                                }
                            }
                        }
                        if (!successClosed) {
                            content += '[/' + tmp.substring(1) + ']';
                        }
                        if (content.length > 0) {
                            stack.push({type: TYPE_TEXT, value: content});
                        }
                        tmp = '';
                        state = STATE_NORMAL;
                    } else {
                        tmp += char;
                    }
                    break;
                }
                case '\n': {
                    tmp += '<br/>';
                    break;
                }
                default: {
                    tmp += char;
                }
            }
        }
        let result = '';
        let node;
        while (node = stack.pop()) {
            if (node.type === TYPE_BBCODE_OPEN) {
                if (tmp.length > 0) {
                    result += tmp;
                    tmp = '';
                }
                result = this.transformTag(node.value, result, node.arg);
            } else if (node.type === TYPE_TEXT) {
                result = node.value + result;
            }
        }
        if (tmp.length > 0) {
            result += tmp;
        }
        return result;
    }
}