import { TagHandler } from '../TagHandler';

export class TagHandlerSize extends TagHandler {
    tagName(): string {
        return 'size';
    };

    private readonly sizeMap = [0, '12px','13px','16px','18px','24px','32px','48px'];

    encodeToHtml(tagLabel: string, arg: string, content: string, forEditor: boolean = false): string | false {
        if (!content) {
            return '';
        }
        if (!arg) {
            return content;
        }
        let size: any = '';
        let sizeLabel: any = '';
        if (arg.match(/^[1-7]$/g)) {
            size = this.sizeMap[parseInt(arg)];
            sizeLabel = arg;
        } else if (arg.match(/^\d+(\.\d+)?px$/g)) {
            size = parseFloat(arg);
            if (isNaN(size) || size < 10 || size > 50) {
                size = 13;
            }
            size = String(size) + 'px';
            sizeLabel = size;
        } else {
            return content;
        }
        // 只有font能同时兼容行内元素和块状元素，所以即便是font被弃用也得用这个
        // noinspection HtmlDeprecatedTag,HtmlDeprecatedAttribute
        return `<span data-size="${sizeLabel}" data-tag="size" style="font-size: ${size}">${content}</span>`;
    }

    decodeFromHtml(element: Element, resolveFun: (node: Nodes, forEditor: boolean, parentStyle: any) => string, forEditor: boolean, parentStyle: any): string | false {
        const currentSize = element.getAttribute('data-size');
        if (parentStyle['size'] === currentSize) {
            return resolveFun(element.childNodes, forEditor, parentStyle);
        } else {
            parentStyle['size'] = currentSize
            return `[size=${currentSize}]${resolveFun(element.childNodes, forEditor, parentStyle)}[/size]`;
        }
    }
}

