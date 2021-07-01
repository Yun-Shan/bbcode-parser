import { TagHandler } from '../TagHandler';

export class TagHandlerMask implements TagHandler {
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
        return `<div class="mask">${content}</div>`;
    }
}
