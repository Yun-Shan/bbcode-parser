import { TagHandler } from '../TagHandler';

export class TagHandlerAlign extends TagHandler {
    tagName(): string {
        return 'align';
    };

    tagAliases(): string[] {
        return ['left', 'right', 'center'];
    }

    encodeToHtml(tagLabel: string, arg: string, content: string, forEditor: boolean = false): string | false {
        if (!content) {
            return '';
        }
        let align;
        if (tagLabel === 'align') {
            if (arg === 'left' || arg === 'right' || arg === 'center') {
                align = arg;
            } else {
                return false;
            }
        } else {
            align = tagLabel;
        }
        // 只有font能同时兼容行内元素和块状元素，所以即便是font被弃用也得用这个
        // noinspection HtmlDeprecatedTag,HtmlDeprecatedAttribute
        return `<div style="text-align: ${align}" data-tag="align">${content}</div>`;
    }

    decodeFromHtml(element: Element, resolveFun: (node: Nodes, forEditor: boolean) => string, forEditor: boolean): string | false {
        const align = (element as any).style.textAlign;
        return `[${align}]${resolveFun(element.childNodes, forEditor)}[/${align}]`;
    }
}

