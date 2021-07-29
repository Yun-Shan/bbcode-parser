import { TagHandler } from '../TagHandler';

export class TagHandlerBlockquote extends TagHandler {
    tagName(): string {
        return 'quote';
    };

    tagAliases(): string[] {
        return ['blockquote'];
    };

    encodeToHtml(tagLabel: string, arg: string, content: string, forEditor: boolean = false): string | false {
        if (!content) {
            return '';
        }
        return `<blockquote data-tag="quote"><p>${content}</p></blockquote>`;
    }

    decodeFromHtml(element: Element, resolveFun: (node: Nodes, forEditor: boolean, parentStyle: any) => string, forEditor: boolean, parentStyle: any): string | false {
        return `[quote]${resolveFun(element.childNodes, forEditor, parentStyle)}[/quote]`;
    }
}

