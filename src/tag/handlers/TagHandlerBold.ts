import { TagHandler } from '../TagHandler';

export class TagHandlerBold extends TagHandler {
    tagName(): string {
        return 'b';
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
        return `[b]${resloveFun(element.childNodes)}[/b]`;
    }
}
