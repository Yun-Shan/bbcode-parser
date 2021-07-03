import { TagHandler } from '../TagHandler';

export class TagHandlerImage extends TagHandler {
    tagName(): string {
        return 'img';
    };

    tagAliases(): string[] {
        return [];
    };

    isSelfClose(): boolean {
        return true;
    }

    encodeToHtml(tagLabel: string, arg: string, content: string): string {
        return `<${this.tagName()} src="${arg}"/>`;
    }

    decodeFromHtml(element: Element, resloveFun: (node: Nodes) => string): string | false {
        return `[img=${element.getAttribute('src')}]`;
    }
}
