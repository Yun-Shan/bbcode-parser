import { TagHandler } from '../TagHandler';

export class TagHandlerCollapse extends TagHandler {
    tagName(): string {
        return 'collapse';
    };

    tagAliases(): string[] {
        return [];
    };

    handle(tagLabel: string, arg: string, content: string): string {
        if (!arg) {
            arg = "点击展开"
        }
        if (arg.indexOf('title=') === 0) {
            arg = arg.substring(6);
        }
        return `<div><details><summary><b>${arg}</b></summary><p>${content}</p></details></div>`;
    }
}
