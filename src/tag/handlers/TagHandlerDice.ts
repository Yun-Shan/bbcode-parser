import { TagHandler } from '../TagHandler';

export class TagHandlerDice extends TagHandler {
    tagName(): string {
        return 'dice';
    };

    tagAliases(): string[] {
        return [];
    };

    encodeToHtml(tagLabel: string, arg: string, content: string): string|false {
        if (!content) {
            return '';
        }
        if (content.match(/^((\d+)|(\d*d\d+))(\+((\d+)|(\d*d\d+)))*$/)) {
            return `<div class="dice">假装有骰娘：${content}=${Math.round(Math.random() * 200)}</div>`;
        }
        return false;
    }

    decodeFromHtml(element: Element, resloveFun: (node: Nodes) => string): string | false {
        return `DICE TODO`;
    }
}
