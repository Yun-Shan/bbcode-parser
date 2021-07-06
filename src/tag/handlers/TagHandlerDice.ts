import { TagHandler } from '../TagHandler';

export class TagHandlerDice extends TagHandler {
    tagName(): string {
        return 'dice';
    };

    encodeToHtml(tagLabel: string, arg: string, content: string, forEditor: boolean = false): string | false {
        if (!content) {
            return '';
        }
        if (content.match(/^((\d{1,7})|(\d{0,7}d\d{1,7}))([+\-]((\d{1,7})|(\d{0,7}d\d{1,7})))*$/)) {
            if (forEditor) {
                return `<div data-tag="dice" class="dice"><span><b>骰子ROLL点表达式：</b></span><div class="dice-expression">${content}</div></div>`;
            } else {
                return `<div class="dice">假装有骰娘：${content}=${Math.round(Math.random() * 200)}</div>`;
            }
        }
        return false;
    }

    decodeFromHtml(element: Element, resolveFun: (node: Nodes, forEditor: boolean) => string, forEditor: boolean): string | false {
        const exps = element.getElementsByClassName('dice-expression');
        const exp = exps.length > 0 ? exps[0].textContent.replace(/\u200B/g,'') : '';
        if (!exp) {
            return false;
        }
        return `[dice]${exp}[/dice]`;
    }
}
