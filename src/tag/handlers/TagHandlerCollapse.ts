import { TagHandler } from '../TagHandler';

export class TagHandlerCollapse extends TagHandler {
    tagName(): string {
        return 'collapse';
    };

    tagAliases(): string[] {
        return [];
    };

    encodeToHtml(tagLabel: string, arg: string, content: string): string {
        if (!arg) {
            arg = "点击展开"
        }
        if (arg.indexOf('title=') === 0) {
            arg = arg.substring(6);
        }
        return `<div data-tag="collapse"><details><summary><b class="collapse-title">${arg}</b></summary><div class="collapse-content">${content}</div></details></div>`;
    }

    decodeFromHtml(element: Element, resloveFun: (node: Nodes) => string): string | false {
        const titleE = element.getElementsByClassName('collapse-title');
        const title = titleE.length > 0 ? titleE[0].textContent : '点击展开';
        const contentE = element.getElementsByClassName('collapse-content');
        const content = contentE.length > 0 ? resloveFun(contentE[0]) : '';
        return `[collapse=${title}]${content}[/collapse]`;
    }
}
