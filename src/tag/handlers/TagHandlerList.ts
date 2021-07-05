import { TagHandler } from '../TagHandler';

export class TagHandlerList extends TagHandler {
    tagName(): string {
        return 'list';
    };

    tagAliases(): string[] {
        return ['ul', 'ol', 'li', '*'];
    };

    allowParents(tagLabel:string): string[] {
        return tagLabel === '*' ? ['list'] : [];
    }

    encodeToHtml(tagLabel: string, arg: string, content: string, forEditor: boolean = false): string | false {
        if (!content) {
            return '';
        }
        let tag = '';
        switch (tagLabel) {
            case 'list':
                tag = arg ? 'ol' : 'ul';
                break;
            case '*':
                tag = 'li';
                break;
            default:
                return content;
        }
        return `<${tag}>${content}</${tag}>`;
    }

    decodeFromHtml(element: Element, resolveFun: (node: Nodes, forEditor: boolean) => string, forEditor: boolean): string | false {
        switch (element.tagName.toLowerCase()) {
            case 'ul':
                return `[list]${resolveFun(element.childNodes, forEditor)}[/list]`;
            case 'ol':
                return `[list=1]${resolveFun(element.childNodes, forEditor)}[/list]`;
            case 'li':
                return `[*]${resolveFun(element.childNodes, forEditor)}`;
            default:
                return false;
        }

    }
}
