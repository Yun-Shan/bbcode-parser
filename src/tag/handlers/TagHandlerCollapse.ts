import { TagHandler } from '../TagHandler';

export class TagHandlerCollapse extends TagHandler {
    tagName(): string {
        return 'collapse';
    };

    encodeToHtml(tagLabel: string, arg: string, content: string, forEditor: boolean = false): string | false {
        if (arg && arg.indexOf('title=') === 0) {
            arg = arg.substring(6);
        }
        if (!arg) {
            arg = "点击展开"
        }
        if (forEditor) {
            return `<div data-tag="collapse" class="collapse"><span>折叠标题：</span><div class="collapse-title">${arg}</div><span>折叠内容：</span><div class="collapse-content">${content}</div></div>`;
        } else {
            return `<div data-tag="collapse"><details><summary><b class="collapse-title">${arg}</b></summary><div class="collapse-content">${content}</div></details></div>`;
        }
    }

    decodeFromHtml(element: Element, resolveFun: (node: Nodes, forEditor: boolean, parentStyle: any) => string, forEditor: boolean, parentStyle: any): string | false {
        const titleE = element.getElementsByClassName('collapse-title');
        const title = titleE.length > 0 ? titleE[0].textContent : '点击展开';
        const contentE = element.getElementsByClassName('collapse-content');
        const content = contentE.length > 0 ? resolveFun(contentE[0], forEditor, parentStyle) : '';
        return `[collapse=${title}]${content}[/collapse]`;
    }
}
