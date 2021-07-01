import { TagHandler } from '../TagHandler';

export class TagHandlerColor implements TagHandler {
    tagName(): string {
        return 'color';
    };

    tagAliases(): string[] {
        return [];
    };

    handle(tagLabel: string, arg: string, content: string): string {
        if (!content) {
            return '';
        }
        if (!arg) {
            return content;
        }
        if (arg.match(/^[0-9a-fA-F]{6}$/)) {
            arg = '#' + arg;
        }
        return `<span style="color:${arg}">${content}</span>`;
    }
}

