import { TagHandler } from './tag/TagHandler';


export class BBCODEParser {
    private static readonly STATE_NORMAL = 0;
    private static readonly STATE_BBCODE_OPEN_START = 1;
    private static readonly STATE_BBCODE_CLOSE_START = 2;
    private static readonly TYPE_TEXT = 0;
    private static readonly TYPE_BBCODE_OPEN = 1;

    readonly TAG_HANDLER_MAP: { [key: string]: TagHandler } = {};
    readonly TAG_ALIASES_MAP: { [key: string]: string } = {};

    transformAsIs(tagName: string, arg: string, content: string): string {
        let openTag = '';
        if (arg) {
            openTag = `${tagName}=${arg}`;
        } else {
            openTag = tagName;
        }
        return `[${openTag}]${content}[/${tagName}]`;
    }

    transformTag(tagLabel: string, content: string, arg: string): string {
        if (content === undefined || content === null) {
            content = '';
        }
        tagLabel = tagLabel.substring(1);
        const tagName = this.TAG_ALIASES_MAP[tagLabel];
        if (!tagName) {
            return this.transformAsIs(tagLabel, arg, content);
        }

        const handler = this.TAG_HANDLER_MAP[tagName];
        if (handler) {
            const result = handler.encodeToHtml(tagName, arg, content);
            if (typeof result === 'string') {
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
        this.TAG_HANDLER_MAP[handler.tagName()] = handler;
        this.TAG_ALIASES_MAP[handler.tagName()] = handler.tagName();
    }

    private getHandler(tagName: string) {
        tagName = this.TAG_ALIASES_MAP[tagName];
        return this.TAG_HANDLER_MAP[tagName];
    }

// TODO 自定义解析：标签内部嵌套的所有东西都交给自定义解析器，可以自行处理内容解析。用途：[code][/code]、[list][*]xx[/list]
// TODO 特殊解析：[code]标签应该忽略正常的闭合标签，直到找到了[/code]或者到达字符串末尾
    bbcode2html(rawContent: string): string {
        // TODO any改接口
        const stack: any[] = [];
        let state = BBCODEParser.STATE_NORMAL;
        let tmp = '';
        for (let idx = 0; idx < rawContent.length; idx++) {
            const char = rawContent[idx];
            switch (char) {
                case '[': {
                    if (state === BBCODEParser.STATE_NORMAL && idx < rawContent.length) {
                        if (tmp.length > 0) {
                            stack.push({type: BBCODEParser.TYPE_TEXT, value: tmp.replace(/ /g, '&nbsp;')});
                            tmp = '';
                        }
                        tmp = '[';
                        if (rawContent[idx + 1] === '/') {
                            state = BBCODEParser.STATE_BBCODE_CLOSE_START;
                            tmp += '/';
                            idx++;
                        } else {
                            state = BBCODEParser.STATE_BBCODE_OPEN_START;
                        }
                    } else if (state === BBCODEParser.STATE_BBCODE_OPEN_START || state === BBCODEParser.STATE_BBCODE_CLOSE_START) {
                        if (tmp.length > 0) {
                            stack.push({type: BBCODEParser.TYPE_TEXT, value: tmp.replace(/ /g, '&nbsp;')});
                            tmp = '[';
                        }
                    } else {
                        tmp += char;
                    }
                    break;
                }
                case ']': {
                    if (state === BBCODEParser.STATE_BBCODE_OPEN_START) {
                        let tag = '';
                        let arg = '';
                        let argIdx = tmp.indexOf('=');
                        if (argIdx > 0) {
                            arg = tmp.substring(argIdx + 1);
                            tag = tmp.substring(0, argIdx);
                        } else {
                            tag = tmp;
                        }
                        const handler = this.getHandler(tag.substring(1));
                        if (handler) {
                            if (handler.isSelfClose()) {
                                stack.push({
                                    type: BBCODEParser.TYPE_TEXT,
                                    value: this.transformTag(tag, '', arg.replace(/ /g, '&nbsp;'))
                                });
                            } else {
                                stack.push({
                                    type: BBCODEParser.TYPE_BBCODE_OPEN,
                                    value: tag,
                                    arg: arg.replace(/ /g, '&nbsp;')
                                });
                            }
                            tmp = '';
                        } else {
                            tmp += ']';
                        }
                        state = BBCODEParser.STATE_NORMAL;
                    } else if (state === BBCODEParser.STATE_BBCODE_CLOSE_START) {
                        const tag = tmp.substring(2);
                        const handler = this.getHandler(tag);
                        if (handler && !handler.isSelfClose()) {
                            let content = '';
                            let successClosed = false;
                            out: while (true) {
                                const node = stack.pop();
                                if (!node) {
                                    break;
                                }
                                switch (node.type) {
                                    case BBCODEParser.TYPE_TEXT: {
                                        content = node.value + content;
                                        break;
                                    }
                                    case BBCODEParser.TYPE_BBCODE_OPEN: {
                                        if (node.value.substring(1) === tmp.substring(2)) {
                                            stack.push({
                                                type: BBCODEParser.TYPE_TEXT,
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
                                content += tmp + ']';
                            }
                            if (content.length > 0) {
                                stack.push({type: BBCODEParser.TYPE_TEXT, value: content});
                            }
                            tmp = '';
                            state = BBCODEParser.STATE_NORMAL;
                        } else {
                            tmp += ']';
                            state = BBCODEParser.STATE_NORMAL;
                        }
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
        let node = undefined;
        while (node = stack.pop()) {
            if (node.type === BBCODEParser.TYPE_BBCODE_OPEN) {
                if (tmp.length > 0) {
                    result += tmp;
                    tmp = '';
                }
                result = this.transformTag(node.value, result, node.arg);
            } else if (node.type === BBCODEParser.TYPE_TEXT) {
                result = node.value + result;
            }
        }
        if (tmp.length > 0) {
            result += tmp;
        }
        console.log(result);
        return result;
    }

    html2bbcode(html: string): string {
        let domList = Array.from(new DOMParser().parseFromString(html, 'text/html').getElementsByTagName('body')[0].childNodes);
        let result = '';
        for (const dom of domList) {
            result += this.resloveNode(dom);
        }
        return result;
    }

    private resloveNode(nodes: Nodes): string {
        let result = '';
        if (!Array.isArray(nodes)) {
            if (nodes instanceof NodeList || nodes instanceof HTMLCollection) {
                nodes = Array.from(nodes);
            } else {
                nodes = [nodes];
            }
        }
        for (const node of nodes) {
            switch (node.nodeType) {
                case node.ELEMENT_NODE: {
                    const e = node as Element;
                    if (e.tagName.toLowerCase() === 'br') {
                        result += '\n';
                        break;
                    }
                    let bbcodeTag = e.getAttribute('data-bbcode-tag');
                    if (!bbcodeTag) {
                        bbcodeTag = e.tagName.toLowerCase();
                    }
                    const handler = this.getHandler(bbcodeTag);
                    if (handler) {
                        result += handler.decodeFromHtml(e, this.resloveNode.bind(this));
                    } else {
                        result += this.resloveNode(Array.from(node.childNodes));
                    }
                    break;
                }
                case node.TEXT_NODE: {
                    result += node.textContent.replace(/[\n\r ]/g, '');
                    break;
                }
                default:
                    break;
            }
        }
        return result;
    }
}
