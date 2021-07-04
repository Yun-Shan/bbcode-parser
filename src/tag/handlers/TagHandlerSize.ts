import { TagHandler } from '../TagHandler';

export class TagHandlerSize extends TagHandler {
    tagName(): string {
        return 'size';
    };

    tagAliases(): string[] {
        return [];
    };

    encodeToHtml(tagLabel: string, arg: string, content: string, forEditor: boolean = false): string | false {
        if (!content) {
            return '';
        }
        if (!arg || !arg.match(/^[1-7]$/)) {
            return content;
        }
        // 只有font能同时兼任行内元素和块状元素，所以即便是font被弃用也得用这个
        // noinspection HtmlDeprecatedTag,HtmlDeprecatedAttribute
        return `<font size="${arg}" data-tag="size">${content}</font>`;
    }

    decodeFromHtml(element: Element, resloveFun: (node: Nodes) => string): string | false {
        return `[size=${element.getAttribute('size')}]${resloveFun(element.childNodes)}[/size]`;
    }
}

