import { TagHandler } from '../TagHandler';

export class TagHandlerDice implements TagHandler {
    readonly tagName: string = 'dice';
    readonly tagAliases: string[] = [];

    handle(tagLabel: string, arg: string, content: string): string|false {
        if (content.match(/^((\d+)|(\d*d\d+))(\+((\d+)|(\d*d\d+)))*$/)) {
            return `<div class="dice">假装有骰娘：${content}=${Math.round(Math.random() * 200)}</div>`;
        }
        return false;
    }
}
