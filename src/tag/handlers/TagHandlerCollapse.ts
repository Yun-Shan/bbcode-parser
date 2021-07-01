import { TagHandler } from '../TagHandler';

export class TagHandlerCollapse implements TagHandler {
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
        return `<details><summary>${arg}</summary>${content}</details>`;
    }
}
