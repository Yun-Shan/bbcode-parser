import { TagHandler } from '../TagHandler';

export class TagHandlerHeader extends TagHandler {
    tagName(): string {
        return 'h1';
    };

    tagAliases(): string[] {
        return ['h2', 'h3'];
    };

    encodeToHtml(tagLabel: string, arg: string, content: string): string {
        if (!content || content.trim().length === 0) {
            return '';
        }
        tagLabel = tagLabel.toLowerCase();
        return `<${tagLabel}>${content}</${tagLabel}>`;
    }

    decodeFromHtml(element: Element, resloveFun: (node: Nodes) => string): string | false {
        const tag = element.tagName.toLowerCase();
        return `[${tag}]${resloveFun(element.childNodes)}[/${tag}]`;
    }
}
