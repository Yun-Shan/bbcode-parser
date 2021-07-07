export abstract class TagHandler {
    abstract tagName(): string;

    tagAliases(): string[] {
        return [];
    }

    match(tagLabel: string): boolean {
        if (tagLabel === this.tagName()) {
            return true;
        }
        for (const alias of this.tagAliases()) {
            if (tagLabel === alias) {
                return true;
            }
        }
        return false;
    }

    /**
     * 是否是自关闭标签，对于自关闭标签会按content为空，在open tag结束后立刻解析
     * @return {boolean}
     */
    isSelfClose() {
        return false;
    }

    /**
     * 允许的父元素，留空表示全部允许
     * @return {string[]}
     */
    allowParents(tagLabel: string): string[] {
        return [];
    }

    /**
     *
     * @param tagLabel 用户输入的tagName
     * @param arg 用户在open tag中写的参数
     * @param content 开闭标签中间的内容，需要注意的是在嵌套标签的情况下，外层标签得到的content是已经被内层标签处理完之后的结果
     * @param forEditor 是否是为编辑器生成html（为编辑器生成的html只可用于编辑器，与正常渲染效果不同）
     */
    abstract encodeToHtml(tagLabel: string, arg: string, content: string, forEditor: boolean): string | false;

    abstract decodeFromHtml(element: Element, resolveFun: (node: Nodes, forEditor: boolean) => string, forEditor: boolean): string | false;

    splitArgs(rawArg: string): string[] {
        return rawArg.split(';');
    }

    combineAttributes(attrs: any) {
        let result = '';
        for (const key in attrs) {
            if (attrs.hasOwnProperty(key)) {
                const val = attrs[key];
                if (val) {
                    result += `${key}="${TagHandler.filterXSS(val)}" `;
                }
            }
        }
        if (result) {
            result = ' ' + result;
        }
        return result;
    }

    checkSize(val: string) {
        if (!val) {
            return '';
        }
        if (val.match(/^\d{1,4}(\.\d{1,4})?(px|%)$/g)) {
            return val;
        }
        if (val.match(/^\d{1,4}(\.\d{1,4})?$/g)) {
            return `${parseFloat(val)}px`;
        }
        return '';
    }

    checkColor(val: string) {
        if (!val) {
            return '';
        }
        val = val.replace(/ +/g, '');
        if (val.match(/^(#[0-9a-fA-F]{6})|([a-zA-Z]{1,20})$/g)) {
            return val;
        }
        if (val.match(/^(rgb\(\d{1,3}(,\d{1,3}){2}\))|(rgba\(\d{1,3}(,\d{1,3}){2},(0\.)?\d{1,2}\))$/g)) {
            return val;
        }
        if (val.match(/^[0-9a-fA-F]{6}$/g)) {
            return `#${val}`;
        }
        return '';
    }

    checkAlign(val: string) {
        if (val
            && (val === 'left' || val === 'right' || val === 'center' || val === 'justify'
                || val === 'top' || val === 'bottom' || val === 'middle' || val === 'baseline')) {
            return val;
        }
        return '';
    }

    combineStyles(styles: any) {
        let result = '';
        for (const key in styles) {
            if (styles.hasOwnProperty(key)) {
                const val = styles[key];
                if (val) {
                    result += `${key}:${val};`;
                }
            }
        }
        return result;
    }

    combineArgs(args: any[]): string {
        let flag = false;
        let result = '';
        for (let i = args.length - 1; i >= 0; i--) {
            const arg = args[i];
            if (arg) {
                result = arg + result;
                flag = true;
            }
            if ((flag || arg) && i > 0) {
                result = ';' + result;
            }
        }
        if (result) {
            result = "=" + result;
        }
        return result;
    }

    static filterXSS(str: any): string {
        if (typeof str !== "string") {
            return String(str);
        }
        return str
            .replace(/\u200B/g, '')
            .replace(/&/g, '&amp;')
            .replace(/</g, '&lt;')
            .replace(/>/g, '&gt;')
            .replace(/"/g, '&quot;')
            .replace(/'/g, '&#39;')
            .replace(/ /g, '&nbsp;');
    }
}


