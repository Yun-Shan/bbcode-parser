import { TagHandler } from '../TagHandler';

export class TagHandlerSmile extends TagHandler {
    tagName(): string {
        return 'smile';
    };

    match(tagLabel: string): boolean {
        return !!tagLabel.match(/^s(-\d+)+$/g);
    }

    isSelfClose(): boolean {
        return true;
    }

    encodeToHtml(tagLabel: string, arg: string, content: string, forEditor: boolean = false): string | false {
        return `[${tagLabel}]`;
    }

    decodeFromHtml(element: Element, resolveFun: (node: Nodes, forEditor: boolean) => string, forEditor: boolean): string | false {
        return false;
    }
}

