import { TagHandler } from '../TagHandler';

export class TagHandlerStrike extends TagHandler {
    tagName(): string {
        return 'del';
    };

    tagAliases(): string[] {
        return ['s'];
    }

    encodeToHtml(tagLabel: string, arg: string, content: string, forEditor: boolean = false): string | false {
        if (!content) {
            return '';
        }
        return `<s>${content}</s>`;
    }

    decodeFromHtml(element: Element, resolveFun: (node: Nodes, forEditor: boolean, parentStyle: any) => string, forEditor: boolean, parentStyle: any): string | false {
        return `[del]${resolveFun(element.childNodes, forEditor, parentStyle)}[/del]`;
    }
}
