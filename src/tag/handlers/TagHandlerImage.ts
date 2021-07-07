import { TagHandler } from '../TagHandler';

export class TagHandlerImage extends TagHandler {
    tagName(): string {
        return 'img';
    };

    tagAliases(): string[] {
        return [];
    };

    isSelfClose(): boolean {
        return true;
    }

    encodeToHtml(tagLabel: string, arg: string, content: string, forEditor: boolean = false): string | false {
        const args = this.splitArgs(arg);
        const src = args[0] || '#';
        const width = args.length > 1 ? parseInt(args[1]) : '';
        const height = args.length > 2 ? parseInt(args[2]) : '';
        const float = args.length > 3 ? args[3] : '';

        let result = `<img src="${src}"`;
        let styleValue = '';
        if (width > 0) {
            styleValue += `width:${width}px;`;
        }
        if (height > 0) {
            styleValue += `height:${height}px;`;
        }
        switch (float) {
            case 'left': styleValue += 'float:left;'; break;
            case 'right': styleValue += 'float:right;'; break;
            default: break;
        }
        if (styleValue) {
            result += ` style="${styleValue}"`;
        }
        return result + '/>';
    }

    decodeFromHtml(element: Element, resolveFun: (node: Nodes, forEditor: boolean) => string, forEditor: boolean): string | false {
        // 不知道为什么它的类型声明没有style属性，只能用any强行调用了
        const img: any = element;
        const src = element.getAttribute('src');
        const width = parseInt(img.style.width);
        const height = parseInt(img.style.height);
        const float = img.style.float;
        let args = this.combineArgs([src, width, height, float]);
        if (!args) {
           args = '=#';
        }
        return `[img${args}]`;
    }
}
