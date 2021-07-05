import { TagHandler } from '../TagHandler';

export class TagHandlerMask extends TagHandler {
    tagName(): string {
        return 'mask';
    };

    encodeToHtml(tagLabel: string, arg: string, content: string, forEditor: boolean = false): string | false {
        if (!content) {
            return '';
        }
        if (forEditor) {
            return `<div data-tag="mask" class="mask" title="黑幕内容">${content}</div>`;
        } else {
            return `<div class="mask"><span class="heimu" title="你知道的太多了">${content}</span></div>`;
        }
    }

    decodeFromHtml(element: Element, resolveFun: (node: Nodes, forEditor: boolean) => string, forEditor: boolean): string | false {
        return `[mask]${resolveFun(element.childNodes, forEditor)}[/mask]`;
    }
}
