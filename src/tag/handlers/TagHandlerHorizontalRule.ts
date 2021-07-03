import { TagHandler } from '../TagHandler';

export class TagHandlerHorizontalRule extends TagHandler {
    tagName(): string {
        return 'hr';
    };

    tagAliases(): string[] {
        return [];
    };

    isSelfClose(): boolean {
        return true;
    }

    encodeToHtml(tagLabel: string, arg: string, content: string): string {
        return '<hr/>';
    }

    decodeFromHtml(element: Element, resloveFun: (node: Nodes) => string): string | false {
        return '[hr]';
    }
}
