import {TagHandler} from '../TagHandler';

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
        const width = args.length > 1 ? this.checkSize(args[1]) : '';
        const height = args.length > 2 ? this.checkSize(args[2]) : '';
        const float = args.length > 3 ? this.checkWhitelistValue(args[3], ['left', 'right']) : '';
        const result = this.combineAttributes({
            src: src,
            style: this.combineStyles({
                width: width,
                height: height,
                'float': float,
            })
        });
        if (!result) {
            return false;
        }
        return `<img${result}/>`;
    }

    decodeFromHtml(element: Element, resolveFun: (node: Nodes, forEditor: boolean, parentStyle: any) => string, forEditor: boolean, parentStyle: any): string | false {
        const img: any = element;
        const src = element.getAttribute('src');
        const width = this.checkSize(img.style.width);
        const height = this.checkSize(img.style.height);
        const float = this.checkWhitelistValue(img.style.float, ['left', 'right']);
        const args = this.combineArgs([src, width, height, float]);
        if (!args) {
            return false;
        }
        return `[img${args}]`;
    }
}
