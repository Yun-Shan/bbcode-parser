import { TagHandler } from '../TagHandler';

export class TagHandlerBold extends TagHandler {
    tagName(): string {
        return 'b';
    };

    tagAliases(): string[] {
        return ['strong'];
    }

    encodeToHtml(tagLabel: string, arg: string, content: string, forEditor: boolean = false): string | false {
        if (!content) {
            return '';
        }
        return `<${this.tagName()}>${content}</${this.tagName()}>`;
    }

    decodeFromHtml(element: Element, resolveFun: (node: Nodes, forEditor: boolean) => string, forEditor: boolean): string | false {
        return `[b]${resolveFun(element.childNodes, forEditor)}[/b]`;
    }
}
