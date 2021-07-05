import { TagHandler } from '../TagHandler';

export class TagHandlerColor extends TagHandler {
    tagName(): string {
        return 'color';
    };

    encodeToHtml(tagLabel: string, arg: string, content: string, forEditor: boolean = false): string | false {
        if (!content) {
            return '';
        }
        if (!arg) {
            return content;
        }
        if (arg.match(/^[0-9a-fA-F]{6}$/)) {
            arg = '#' + arg;
        }
        // 只有font能同时兼容行内元素和块状元素，所以即便是font被弃用也得用这个
        // noinspection HtmlDeprecatedTag,HtmlDeprecatedAttribute
        return `<font color="${arg}" data-tag="color">${content}</font>`;
    }

    decodeFromHtml(element: Element, resolveFun: (node: Nodes, forEditor: boolean) => string, forEditor: boolean): string | false {
        return `[color=${element.getAttribute('color')}]${resolveFun(element.childNodes, forEditor)}[/color]`;
    }
}

