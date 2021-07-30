import { TagHandler } from '../TagHandler';

export class TagHandlerBackgroundColor extends TagHandler {
    tagName(): string {
        return 'bgcolor';
    };

    encodeToHtml(tagLabel: string, arg: string, content: string, forEditor: boolean = false): string | false {
        if (!content) {
            return '';
        }
        arg = this.checkColor(arg);
        if (!arg) {
            return content;
        }
        return `<span data-color="${arg}" data-tag="bgcolor" style="background-color: ${arg}">${content}</span>`;
    }

    decodeFromHtml(element: Element, resolveFun: (node: Nodes, forEditor: boolean, parentStyle: any) => string, forEditor: boolean, parentStyle: any): string | false {
        const currentBgColor = element.getAttribute('data-color');
        if (parentStyle['bgcolor'] === currentBgColor) {
            return resolveFun(element.childNodes, forEditor, parentStyle);
        } else {
            parentStyle['bgcolor'] = currentBgColor
            return `[bgcolor=${currentBgColor}]${resolveFun(element.childNodes, forEditor, parentStyle)}[/bgcolor]`;
        }
    }
}

