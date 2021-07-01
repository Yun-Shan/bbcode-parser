import { TagHandler } from '../TagHandler';

export class TagHandlerItalic extends TagHandler {
    tagName(): string {
        return 'i';
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
