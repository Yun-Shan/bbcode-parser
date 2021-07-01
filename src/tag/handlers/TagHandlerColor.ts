import { TagHandler } from '../TagHandler';

export class TagHandlerColor implements TagHandler {
    readonly tagName: string = 'color';
    readonly tagAliases: string[] = [];

    handle(tagLabel: string, arg: string, content: string): string {
        if (!arg) {
            return content;
        }
        if (arg.match(/^[0-9a-fA-F]{6}$/)) {
            arg = '#' + arg;
        }
        return `<span style="color:${arg}">${content}</span>`;
    }
}

