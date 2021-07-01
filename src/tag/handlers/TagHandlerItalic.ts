import { TagHandler } from '../TagHandler';

export class TagHandlerItalic implements TagHandler {
    readonly tagName: string = 'i';
    readonly tagAliases: string[] = [];

    handle(tagLabel: string, arg: string, content: string): string {
        return `<${this.tagName}>${content}</${this.tagName}>`;
    }
}
