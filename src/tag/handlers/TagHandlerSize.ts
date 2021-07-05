import { TagHandler } from '../TagHandler';

export class TagHandlerSize extends TagHandler {
    tagName(): string {
        return 'size';
    };

    encodeToHtml(tagLabel: string, arg: string, content: string, forEditor: boolean = false): string | false {
        if (!content) {
            return '';
        }
        if (!arg || !arg.match(/^[1-7]$/)) {
            return content;
        }
        // 只有font能同时兼容行内元素和块状元素，所以即便是font被弃用也得用这个
        // noinspection HtmlDeprecatedTag,HtmlDeprecatedAttribute
        return `<font size="${arg}" data-tag="size">${content}</font>`;
    }

    decodeFromHtml(element: Element, resolveFun: (node: Nodes, forEditor: boolean) => string, forEditor: boolean): string | false {
        return `[size=${element.getAttribute('size')}]${resolveFun(element.childNodes, forEditor)}[/size]`;
    }
}

