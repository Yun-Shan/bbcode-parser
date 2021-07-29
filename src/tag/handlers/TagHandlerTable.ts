import {TagHandler} from '../TagHandler';

export class TagHandlerTable extends TagHandler {
    tagName(): string {
        return 'table';
    };

    tagAliases(): string[] {
        return ['tr', 'td'];
    }

    allowParents(tagLabel: string): string[] {
        switch (tagLabel) {
            case 'tr':
                return ['table'];
            case 'td':
                return ['tr'];
            default:
                return [];
        }
    }

    // [table=宽度;高度;背景色;对齐方式;单元格间距;单元格内部边距]
    // [tr=高度;背景色]
    // [td=宽度;高度;背景色;水平对齐;垂直对齐;跨列数量;跨行数量]

    encodeToHtml(tagLabel: string, arg: string, content: string, forEditor: boolean = false): string | false {
        const args = this.splitArgs(arg);
        let width;
        let height;
        let bgcolor;
        let alignH;
        let alignV;
        let cellSpacing;
        let cellPadding;
        let result;
        switch (tagLabel) {
            case 'td':
                width = args.length > 0 ? this.checkSize(args[0]) : '';
                height = args.length > 1 ? this.checkSize(args[1]) : '';
                bgcolor = args.length > 2 ? this.checkColor(args[2]) : '';
                alignH = args.length > 3 ? this.checkAlign(args[3]) : '';
                alignV = args.length > 4 ? this.checkAlign(args[4]) : '';
                const rowspan = args.length > 5 ? (parseInt(args[5]) > 1 ? parseInt(args[5]) : 0): '';
                const colspan = args.length > 6 ? (parseInt(args[6]) > 1 ? parseInt(args[6]) : 0) : '';
                result = this.combineAttributes({
                    rowspan: rowspan,
                    colspan: colspan,
                    style: this.combineStyles({
                        width: width,
                        height: height,
                        'text-align': alignH,
                        'vertical-align': alignV,
                        'background-color': bgcolor,
                    })
                });
                return `<td${result}>${content}</td>`;
            case 'tr':
                height = args.length > 0 ? this.checkSize(args[0]) : '';
                bgcolor = args.length > 1 ? this.checkColor(args[1]) : '';
                result = this.combineAttributes({
                    style: this.combineStyles({
                        height: height,
                        'background-color': bgcolor,
                    })
                });
                return `<tr${result}>${content}</tr>`;
            case 'table':
                width = args.length > 0 ? this.checkSize(args[0]) : '';
                height = args.length > 1 ? this.checkSize(args[1]) : '';
                bgcolor = args.length > 2 ? this.checkColor(args[2]) : '';
                alignH = args.length > 3 ? this.checkAlign(args[3]) : '';
                cellSpacing = args.length > 4 ? parseInt(args[4]) : '';
                cellPadding = args.length > 5 ? parseInt(args[5]) : '';
                result = this.combineAttributes({
                    align: alignH,
                    cellspacing: cellSpacing,
                    cellpadding: cellPadding,
                    style: this.combineStyles({
                        width: width,
                        height: height,
                        'background-color': bgcolor,
                    })
                });
                return `<table${result}>${content}</table>`;
            default:
                return false;
        }
    }

    decodeFromHtml(element: Element, resolveFun: (node: Nodes, forEditor: boolean, parentStyle: any) => string, forEditor: boolean, parentStyle: any): string | false {
        let width;
        let height;
        let bgcolor;
        let alignH;
        let alignV;
        let cellSpacing;
        let cellPadding;
        let args;
        const e: any = element;
        switch (element.tagName.toLowerCase()) {
            case 'table':
                width = this.checkSize(e.style.width);
                height = this.checkSize(e.style.height);
                bgcolor = this.checkColor(e.style.backgroundColor);
                alignH = this.checkAlign(e.align);
                cellSpacing = parseInt(e.cellspacing);
                cellPadding = parseInt(e.cellpadding);
                args = this.combineArgs([width, height, bgcolor, alignH, cellSpacing, cellPadding]);
                return `[table${args}]${resolveFun(element.childNodes, forEditor, parentStyle)}[/table]`;
            case 'tr':
                height = this.checkSize(e.style.height);
                bgcolor = this.checkColor(e.style.backgroundColor);
                args = this.combineArgs([height, bgcolor]);
                return `[tr${args}]${resolveFun(element.childNodes, forEditor, parentStyle)}[/tr]`;
            case 'td':
                width = this.checkSize(e.style.width);
                height = this.checkSize(e.style.height);
                bgcolor = this.checkColor(e.style.backgroundColor);
                alignH = this.checkAlign(e.style.textAlign);
                alignV = this.checkAlign(e.style.verticalAlign);
                // 注意这里获取是大写的，其它都是地方小写
                const rowspan = parseInt(e.rowSpan) > 1 ? parseInt(e.rowSpan) : 0;
                const colspan = parseInt(e.colSpan) > 1 ? parseInt(e.colSpan) : 0;
                args = this.combineArgs([width, height, bgcolor, alignH, alignV, rowspan, colspan]);
                return `[td${args}]${resolveFun(element.childNodes, forEditor, parentStyle)}[/td]`;
            default:
                return false;
        }
    }
}
