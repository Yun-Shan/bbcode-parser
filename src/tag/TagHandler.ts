export interface TagHandler {
    readonly tagName: string;
    readonly tagAliases: string[];

    /**
     *
     * @param tagLabel 用户输入的tagName
     * @param arg 用户在open tag中写的参数
     * @param content 开闭标签中间的内容，需要注意的是在嵌套标签的情况下，外层标签得到的content是已经被内层标签处理完之后的结果
     */
    handle(tagLabel: string, arg: string, content: string): string|false;
}


