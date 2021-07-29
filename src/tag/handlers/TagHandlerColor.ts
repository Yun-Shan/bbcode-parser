import { TagHandler } from '../TagHandler';

export class TagHandlerColor extends TagHandler {
    tagName(): string {
        return 'color';
    };

    encodeToHtml(tagLabel: string, arg: string, content: string, forEditor: boolean = false): string | false {
        if (!content) {
            return '';
        }
        arg = this.checkColor(arg);
        if (!arg) {
            return content;
        }
        return `<span data-color="${arg}" data-tag="color" style="color: ${arg}">${content}</span>`;
    }

    decodeFromHtml(element: Element, resolveFun: (node: Nodes, forEditor: boolean, parentStyle: any) => string, forEditor: boolean, parentStyle: any): string | false {
        const currentColor = element.getAttribute('data-color');
        if (parentStyle['color'] === currentColor) {
            return resolveFun(element.childNodes, forEditor, parentStyle);
        } else {
            parentStyle['color'] = currentColor
            return `[color=${currentColor}]${resolveFun(element.childNodes, forEditor, parentStyle)}[/color]`;
        }
    }
}

