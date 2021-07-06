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

    combineArgs(args: string[]): string {
        let flag = false;
        let result = '';
        for (let i = args.length - 1; i >= 0; i--){
            const arg = args[i];
            if (arg) {
                result = arg + result;
                flag = true;
            }
            if ((flag || arg) && i > 0) {
                result = ';' + result;
            }
        }
        return result;
    }
}


