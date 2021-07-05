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

    decodeFromHtml(element: Element, resloveFun: (node: Nodes) => string): string | false {
        switch (element.tagName.toLowerCase()) {
            case 'ul':
                return `[list]${resloveFun(element.childNodes)}[/list]`;
            case 'ol':
                return `[list=1]${resloveFun(element.childNodes)}[/list]`;
            case 'li':
                return `[*]${resloveFun(element.childNodes)}`;
            default:
                return false;
        }

    }
}
