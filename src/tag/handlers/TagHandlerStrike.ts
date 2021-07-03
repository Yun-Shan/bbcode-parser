import { TagHandler } from '../TagHandler';

export class TagHandlerStrike extends TagHandler {
    tagName(): string {
        return 's';
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
        return `[s]${resloveFun(element.childNodes)}[/s]`;
    }
}
