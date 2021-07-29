import { TagHandler } from '../TagHandler';

export class TagHandlerHeader extends TagHandler {
    tagName(): string {
        return 'h1';
    };

    tagAliases(): string[] {
        return ['h2', 'h3'];
    };

    encodeToHtml(tagLabel: string, arg: string, content: string, forEditor: boolean = false): string | false {
        if (!content || content.replace(/ +/g, '').length === 0) {
            return '';
        }
        tagLabel = tagLabel.toLowerCase();
        return `<${tagLabel}>${content}</${tagLabel}>`;
    }

    decodeFromHtml(element: Element, resolveFun: (node: Nodes, forEditor: boolean, parentStyle: any) => string, forEditor: boolean, parentStyle: any): string | false {
        const tag = element.tagName.toLowerCase();
        return `[${tag}]${resolveFun(element.childNodes, forEditor, parentStyle)}[/${tag}]`;
    }
}
