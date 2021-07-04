import { TagHandler } from '../TagHandler';

export class TagHandlerLink extends TagHandler {
    tagName(): string {
        return 'url';
    };

    tagAliases(): string[] {
        return [];
    };

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

    decodeFromHtml(element: Element, resloveFun: (node: Nodes) => string): string | false {
        return `[url=${element.getAttribute('href')}]${element.textContent}[/url]`;
    }
}
