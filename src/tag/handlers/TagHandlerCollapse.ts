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
        return `<div><details><summary><b>${arg}</b></summary><p>${content}</p></details></div>`;
    }

    decodeFromHtml(element: Element, resloveFun: (node: Nodes) => string): string | false {
        return `[collapse]${resloveFun(element.getElementsByClassName('collapse-content'))}[/collapse]`;
    }
}
