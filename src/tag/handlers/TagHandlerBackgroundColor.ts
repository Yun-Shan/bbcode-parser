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
        return `[bgcolor=${element.getAttribute('data-color')}]${resolveFun(element.childNodes, forEditor, parentStyle)}[/bgcolor]`;
    }
}

