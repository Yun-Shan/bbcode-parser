import { TagHandler } from '../TagHandler';

export class TagHandlerColor extends TagHandler {
    tagName(): string {
        return 'color';
    };

    tagAliases(): string[] {
        return [];
    };

    encodeToHtml(tagLabel: string, arg: string, content: string): string {
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

    decodeFromHtml(element: Element, resloveFun: (node: Nodes) => string): string | false {
        return `[color=${element.getAttribute('data-bbcode-color')}]${resloveFun(element.childNodes)}[/color]`;
    }
}

