import {TagHandler} from '../TagHandler';
import {BBCODEParser} from "../../BBCODEParser";

export class TagHandlerCode extends TagHandler {
    tagName(): string {
        return 'code';
    };

    useCustomParser(tagLabel: string): boolean {
        return true;
    }

    parseStackToHtml(stack: any[], rawContent: string, startIdx: number, endIdx: number, parser: BBCODEParser, forEditor: boolean): string {
        const content = TagHandler.filterXSS(rawContent.substring(startIdx, endIdx));
        if (forEditor) {
            return `<div data-tag="code" class="code"><span>代码文本：</span><pre class="code-content">${content}</pre></div>`;
        } else {
            return `<pre class="code">${content}</pre>`;
        }
    }

    encodeToHtml(tagLabel: string, arg: string, content: string, forEditor: boolean = false): string | false {
        return false;
    }

    decodeFromHtml(element: Element, resolveFun: (node: Nodes, forEditor: boolean, parentStyle: any) => string, forEditor: boolean, parentStyle: any): string | false {
        let content = element.getElementsByClassName('code-content')[0].innerHTML;
        content = content.replace(/<br\/?>/gi, '\n');
        content = TagHandler.unfilteredXSS(content);
        return `[code]${content}[/code]`;
    }
}
