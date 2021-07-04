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

    decodeFromHtml(element: Element, resloveFun: (node: Nodes) => string): string | false {
        return `[quote]${resloveFun(element.childNodes)}[/quote]`;
    }
}

