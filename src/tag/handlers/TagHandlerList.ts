import {TagHandler} from '../TagHandler';
import {BBCODEParser} from "../../BBCODEParser";

// list要注意在li末尾是换行的情况下增加零宽空格(&#8203;或者写成\u200B)，并且在html向bbcode反向解析的时候去掉这个零宽空格，保证只在渲染结果里有这个
// \u200B的去除由html2bbcode方法统一完成，不需要在此类中关心

export class TagHandlerList extends TagHandler {
    tagName(): string {
        return 'list';
    };

    tagAliases(): string[] {
        return ['ul', 'ol', 'li', '*'];
    };

    allowParents(tagLabel: string): string[] {
        return tagLabel === '*' ? ['list'] : [];
    }

    useCustomParser(tagLabel: string): boolean {
        return tagLabel === 'list';
    }

    parseStackToHtml(stack: any[], rawContent: string, startIdx: number, endIdx: number, parser: BBCODEParser, forEditor: boolean): string {
        let result = '';
        let tmp = '';
        let tmpStack: any[] = [];
        for (let i = 0; i < stack.length; i++) {
            const node = stack[i];
            switch (node.type) {
                case BBCODEParser.TYPE_TEXT: {
                    tmp = node.value + tmp;
                    break;
                }
                case BBCODEParser.TYPE_BBCODE_OPEN: {
                    const subTag = node.value.substring(1);
                    switch (subTag) {
                        case 'list':
                            const tagName = node.arg ? 'ol' : 'ul';
                            if (tmp.trim()) {
                                if (tmp.endsWith('\n')) {
                                    tmp += '&#8203;';
                                }
                                result = `<li>${tmp}</li>` + result;
                            }
                            result = `<${tagName}>${result}</${tagName}>`;
                            tmp = '';
                            break;
                        case '*':
                            if (tmp.endsWith('\n')) {
                                tmp += '&#8203;';
                            }
                            result = `<li>${tmp}</li>` + result;
                            tmp = '';
                            break;
                        default:
                            tmp = parser.transformTag(node.value, tmp, node.arg, forEditor) + tmpStack.pop();
                            break;
                    }
                    break;
                }
                case BBCODEParser.TYPE_BBCODE_CLOSE: {
                    tmpStack.push(tmp);
                    tmp = '';
                    break;
                }
            }
        }
        return result;
    }

    encodeToHtml(tagLabel: string, arg: string, content: string, forEditor: boolean = false): string | false {
        if (!content) {
            return '';
        }
        let tag = '';
        switch (tagLabel) {
            case 'list':
                tag = arg ? 'ol' : 'ul';
                break;
            case '*':
                tag = 'li';
                break;
            default:
                return content;
        }
        return `<${tag}>${content}</${tag}>`;
    }

    decodeFromHtml(element: Element, resolveFun: (node: Nodes, forEditor: boolean, parentStyle: any) => string, forEditor: boolean, parentStyle: any): string | false {
        switch (element.tagName.toLowerCase()) {
            case 'ul':
                return `[list]${resolveFun(element.childNodes, forEditor, parentStyle)}[/list]`;
            case 'ol':
                return `[list=1]${resolveFun(element.childNodes, forEditor, parentStyle)}[/list]`;
            case 'li':
                return `[*]${resolveFun(element.childNodes, forEditor, parentStyle)}`;
            default:
                return false;
        }
    }
}
