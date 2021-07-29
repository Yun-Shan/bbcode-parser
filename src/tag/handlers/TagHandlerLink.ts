import { TagHandler } from '../TagHandler';

export class TagHandlerLink extends TagHandler {
    tagName(): string {
        return 'url';
    };

    tagAliases(): string[] {
        return ['a'];
    }

    encodeToHtml(tagLabel: string, arg: string, content: string, forEditor: boolean = false): string | false {
        if (!content) {
            return '';
        }
        if (!arg) {
            arg = '#'
        } else if (!arg.match(/^((https|http):\/\/)[^\s]+$/)) {
            arg = 'http://' + arg;
        }
        return `<a href="${arg}" data-tag="url">${content}</a>`;
    }

    decodeFromHtml(element: Element, resolveFun: (node: Nodes, forEditor: boolean, parentStyle: any) => string, forEditor: boolean, parentStyle: any): string | false {
        var content = resolveFun(element.childNodes, forEditor, parentStyle);
        if (!content) {
            return false;
        }
        return `[url=${element.getAttribute('href')}]${content}[/url]`;
    }
}
