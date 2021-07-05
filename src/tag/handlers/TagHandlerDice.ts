import { TagHandler } from '../TagHandler';

export class TagHandlerDice extends TagHandler {
    tagName(): string {
        return 'dice';
    };

    encodeToHtml(tagLabel: string, arg: string, content: string, forEditor: boolean = false): string | false {
        if (!content) {
            return '';
        }
        if (content.match(/^((\d+)|(\d*d\d+))(\+((\d+)|(\d*d\d+)))*$/)) {
            if (forEditor) {
                return `<div data-tag="dice" class="dice"><span><b>骰子ROLL点表达式：</b></span><div class="dice-expression">${content}</div></div>`;
            } else {
                return `<div class="dice">假装有骰娘：${content}=${Math.round(Math.random() * 200)}</div>`;
            }
        }
        return false;
    }

    decodeFromHtml(element: Element, resloveFun: (node: Nodes) => string): string | false {
        const exps = element.getElementsByClassName('dice-expression');
        const exp = exps.length > 0 ? exps[0].textContent : '';
        if (!exp) {
            return false;
        }
        return `[dice]${exp}[/dice]`;
    }
}
