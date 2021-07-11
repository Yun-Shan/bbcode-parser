import { TagHandler } from './tag/TagHandler';
import {TagHandlerCompatible} from "./tag/handlers/TagHandlerCompatible";


export class BBCODEParser {
    private static readonly STATE_NORMAL = 0;
    private static readonly STATE_BBCODE_OPEN_START = 1;
    private static readonly STATE_BBCODE_CLOSE_START = 2;
    private static readonly TYPE_TEXT = 0;
    private static readonly TYPE_BBCODE_OPEN = 1;

    private readonly TAG_HANDLER_LIST: TagHandler[] = [];
    private readonly compatible = new TagHandlerCompatible();

    transformAsIs(tagName: string, arg: string, content: string): string {
        let openTag = '';
        if (arg) {
            openTag = `${tagName}=${arg}`;
        } else {
            openTag = tagName;
        }
        return `[${openTag}]${content}[/${tagName}]`;
    }

    transformTag(tagLabel: string, content: string, arg: string, forEditor: boolean): string {
        if (content === undefined || content === null) {
            content = '';
        }
        tagLabel = tagLabel.substring(1);
        const handler = this.getHandler(tagLabel);
        if (handler) {
            const result = handler.encodeToHtml(tagLabel, arg, content, forEditor);
            if (typeof result === 'string') {
                return result;
            }
        }
        return this.transformAsIs(tagLabel, arg, content);
    }

    registerTagHandler(handler: TagHandler) {
        this.TAG_HANDLER_LIST.push(handler);
    }

    private getHandler(tagLabel: string) {
        for (const handler of this.TAG_HANDLER_LIST) {
            if (handler.match(tagLabel)) {
                return handler;
            }
        }
        return null;
    }

// TODO 自定义解析：标签内部嵌套的所有东西都交给自定义解析器，可以自行处理内容解析。用途：[code][/code]、[list][*]xx[/list]
// TODO 特殊解析：[code]标签应该忽略正常的闭合标签，直到找到了[/code]或者到达字符串末尾
    bbcode2html(rawContent: string, forEditor: boolean = false): string {
        rawContent = rawContent.replace(/\xC2\xA0/g, ' ');
        // TODO any改接口
        const stack: any[] = [];
        const parentMap: any = {};
        let state = BBCODEParser.STATE_NORMAL;
        let tmp = '';
        for (let idx = 0; idx < rawContent.length; idx++) {
            const char = rawContent[idx];
            switch (char) {
                case '[': {
                    if (state === BBCODEParser.STATE_NORMAL && idx < rawContent.length) {
                        if (tmp.length > 0) {
                            stack.push({type: BBCODEParser.TYPE_TEXT, value: TagHandler.filterXSS(tmp)});
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
                            stack.push({type: BBCODEParser.TYPE_TEXT, value: TagHandler.filterXSS(tmp)});
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
                        // 兼容[tag arg=xx]的形式，等到线上的这种异常格式剩余足够少的时候就可以删掉
                        let equalsIdx = tmp.indexOf('=');
                        let argIdx = -1;
                        if (equalsIdx > 0) {
                            let spaceIdx = tmp.indexOf(' ');
                            if (spaceIdx < 0 || spaceIdx > equalsIdx) {
                                argIdx = equalsIdx;
                            } else  if (spaceIdx > 0 && spaceIdx < equalsIdx) {
                                argIdx = spaceIdx;
                            }
                        }
                        if (argIdx > 0) {
                            arg = tmp.substring(argIdx + 1);
                            tag = tmp.substring(0, argIdx);
                        } else {
                            tag = tmp;
                        }
                        const realTag = tag.substring(1);
                        const handler = this.getHandler(realTag);
                        let allowHandler = false;
                        if (handler) {
                            const allowParents = handler.allowParents(realTag);
                            if (allowParents.length > 0) {
                                for (const parentName of allowParents) {
                                    if (parentMap[parentName]) {
                                        allowHandler = true;
                                        break;
                                    }
                                }
                            } else {
                                allowHandler = true;
                            }
                        }
                        if (allowHandler) {
                            if (handler.isSelfClose()) {
                                stack.push({
                                    type: BBCODEParser.TYPE_TEXT,
                                    value: this.transformTag(tag, '', arg, forEditor)
                                });
                            } else {
                                stack.push({
                                    type: BBCODEParser.TYPE_BBCODE_OPEN,
                                    value: tag,
                                    arg: arg
                                });
                                parentMap[realTag] = parentMap[realTag] ? parentMap[realTag] + 1 : 1;
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
                                        const subTag = node.value.substring(1);
                                        if (parentMap[subTag]) {
                                            parentMap[subTag] = Math.max(parentMap[subTag] - 1, 0);
                                        }
                                        if (tag === subTag) {
                                            stack.push({
                                                type: BBCODEParser.TYPE_TEXT,
                                                value: this.transformTag(node.value, content, node.arg, forEditor)
                                            });
                                            content = '';
                                            successClosed = true;
                                            break out;
                                        } else {
                                            content = this.transformTag(node.value, content, node.arg, forEditor);
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
                        } else {
                            tmp += ']';
                        }
                        state = BBCODEParser.STATE_NORMAL;
                    } else {
                        tmp += char;
                    }
                    break;
                }
                case '\r': break;
                default: {
                    tmp += char;
                    break;
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
                result = this.transformTag(node.value, result, node.arg, forEditor);
            } else if (node.type === BBCODEParser.TYPE_TEXT) {
                result = node.value + result;
            }
        }
        if (tmp.length > 0) {
            result += TagHandler.filterXSS(tmp);
        }
        result = result.replace(/\n/g, '<br/>');
        return result;
    }

    html2bbcode(html: string, forEditor: boolean): string {
        let domList = Array.from(new DOMParser().parseFromString(html, 'text/html').getElementsByTagName('body')[0].childNodes);
        let result = '';
        for (const dom of domList) {
            result += this.resolveNode(dom, forEditor);
        }
        return result;
    }

    private resolveNode(nodes: Nodes, forEditor: boolean): string {
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
                    if (e.getAttribute('data-cke-temp') === '1' || e.classList.contains('cke_widget_partial_mask')) {
                        break;
                    }
                    if (e.tagName.toLowerCase() === 'br') {
                        result += '\n';
                        break;
                    }
                    let bbcodeTag = e.getAttribute('data-tag');
                    if (!bbcodeTag) {
                        bbcodeTag = e.tagName.toLowerCase();
                    }
                    let handler = this.getHandler(bbcodeTag);
                    if (!handler) {
                        handler = this.compatible;
                    }
                    let decodeResult = handler.decodeFromHtml(e, this.resolveNode.bind(this), forEditor);
                    if (decodeResult) {
                        result += decodeResult;
                    } else {
                        result += this.resolveNode(Array.from(node.childNodes), forEditor);
                    }
                    break;
                }
                case node.TEXT_NODE: {
                    result += node.textContent.replace(/\r+/g, '');
                    break;
                }
                default:
                    break;
            }
        }
        return result;
    }
}
