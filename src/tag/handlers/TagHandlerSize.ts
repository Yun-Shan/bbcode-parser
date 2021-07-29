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
        // 这里因为要支持1-7这样的特殊格式的文字大小，所以不使用checkSize而是自行判断
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

