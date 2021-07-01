import { TagHandler } from '../TagHandler';

export class TagHandlerBold implements TagHandler {
    tagName(): string {
        return 'b';
    };

    tagAliases(): string[] {
        return [];
    };

    handle(tagLabel: string, arg: string, content: string): string {
        if (!content) {
            return '';
        }
        return `<${this.tagName()}>${content}</${this.tagName()}>`;
    }
}
