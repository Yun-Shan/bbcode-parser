import { TagHandler } from '../TagHandler';

export class TagHandlerBold implements TagHandler {
    readonly tagName: string = 'b';
    readonly tagAliases: string[] = [];

    handle(tagLabel: string, arg: string, content: string): string {
        return `<${this.tagName}>${content}</${this.tagName}>`;
    }
}
