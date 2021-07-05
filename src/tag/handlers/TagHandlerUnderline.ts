import { TagHandler } from '../TagHandler';

export class TagHandlerUnderline extends TagHandler {
    tagName(): string {
        return 'u';
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
        return `[u]${resolveFun(element.childNodes, forEditor)}[/u]`;
    }
}
