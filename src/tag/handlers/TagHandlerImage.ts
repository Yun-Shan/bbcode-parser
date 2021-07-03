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
        const args = this.splitArgs(arg);
        const src = args[0];
        const width = args.length > 1 ? args[1] : '';
        const height = args.length > 2 ? args[2] : '';
        const marginH = args.length > 3 ? args[3] : '';
        const marginV = args.length > 4 ? args[4] : '';
        const float = args.length > 5 ? args[5] : '';

        return `<${this.tagName()} src="${arg}"/>`;
    }

    decodeFromHtml(element: Element, resloveFun: (node: Nodes) => string): string | false {
        return `[img=${element.getAttribute('src')}]`;
    }
}
