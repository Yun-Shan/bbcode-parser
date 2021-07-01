import { TagHandler } from '../TagHandler';

export class TagHandlerMask implements TagHandler {
    readonly tagName: string = 'mask';
    readonly tagAliases: string[] = [];

    handle(tagLabel: string, arg: string, content: string): string {
        return `<div class="mask">${content}</div>`;
    }
}
