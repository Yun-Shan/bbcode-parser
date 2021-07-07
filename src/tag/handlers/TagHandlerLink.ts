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

    decodeFromHtml(element: Element, resolveFun: (node: Nodes, forEditor: boolean) => string, forEditor: boolean): string | false {
        var content = resolveFun(element.childNodes, forEditor);
        if (!content) {
            return false;
        }
        return `[url=${element.getAttribute('href')}]${content}[/url]`;
    }
}
