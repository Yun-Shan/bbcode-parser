import { TagHandler } from '../TagHandler';

export class TagHandlerItalic extends TagHandler {
    tagName(): string {
        return 'i';
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
        return `[i]${resloveFun(element.childNodes)}[/i]`;
    }
}
