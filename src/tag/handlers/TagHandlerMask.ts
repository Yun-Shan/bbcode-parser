import { TagHandler } from '../TagHandler';

export class TagHandlerMask extends TagHandler {
    tagName(): string {
        return 'mask';
    };

    tagAliases(): string[] {
        return [];
    };

    handle(tagLabel: string, arg: string, content: string): string {
        if (!content) {
            return '';
        }
        return `<div class="mask"><span class="heimu" title="你知道的太多了">${content}</span></div>`;
    }
}
