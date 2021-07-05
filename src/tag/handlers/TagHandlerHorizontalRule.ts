import { TagHandler } from '../TagHandler';

export class TagHandlerHorizontalRule extends TagHandler {
    tagName(): string {
        return 'hr';
    };

    isSelfClose(): boolean {
        return true;
    }

    encodeToHtml(tagLabel: string, arg: string, content: string, forEditor: boolean = false): string | false {
        return '<hr/>';
    }

    decodeFromHtml(element: Element, resloveFun: (node: Nodes) => string): string | false {
        return '[hr]';
    }
}
