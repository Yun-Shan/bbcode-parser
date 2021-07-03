import { TagHandler } from '../TagHandler';

export class TagHandlerUnderline extends TagHandler {
    tagName(): string {
        return 'u';
    };

    tagAliases(): string[] {
        return [];
    };

    encodeToHtml(tagLabel: string, arg: string, content: string): string {
        if (!content) {
            return '';
        }
        return `<${this.tagName()}>${content}</${this.tagName()}>`;
    }

    decodeFromHtml(element: Element, resloveFun: (node: Nodes) => string): string | false {
        return `[u]${resloveFun(element.childNodes)}[/u]`;
    }
}
