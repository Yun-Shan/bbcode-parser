import { TagHandler } from '../TagHandler';

export class TagHandlerCollapse implements TagHandler {
    readonly tagName: string = 'collapse';
    readonly tagAliases: string[] = [];

    handle(tagLabel: string, arg: string, content: string): string {
        if (!arg) {
            arg = "点击展开"
        }
        return `<details><summary>${arg}</summary>${content}</details>`;
    }
}
