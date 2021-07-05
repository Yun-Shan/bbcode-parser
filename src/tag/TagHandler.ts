export abstract class TagHandler {
    abstract tagName(): string;
    tagAliases(): string[] {
        return [];
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
    abstract decodeFromHtml(element: Element, resloveFun: (node: Nodes) => string): string|false;

    splitArgs(rawArg: string): string[] {
        return rawArg.split(';');
    }
}


