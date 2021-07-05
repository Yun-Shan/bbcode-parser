import { TagHandler } from '../TagHandler';

export class TagHandlerItalic extends TagHandler {
    tagName(): string {
        return 'i';
    };

    tagAliases(): string[] {
        return [];
    };

    encodeToHtml(tagLabel: string, arg: string, content: string, forEditor: boolean = false): string | false {
        if (!content) {
            return '';
        }
        return `<${this.tagName()}>${content}</${this.tagName()}>`;
    }

    decodeFromHtml(element: Element, resolveFun: (node: Nodes, forEditor: boolean) => string, forEditor: boolean): string | false {
        return `[i]${resolveFun(element.childNodes, forEditor)}[/i]`;
    }
}
