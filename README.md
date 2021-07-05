# YS bbcode-parser
***觉得好用的话不妨点个star***

因为找不到好用的可扩展的bbcode解析器，所以自己实现了一个  
该解析器使用状态机实现

功能上的目标：
1. 可扩展
2. 可任意嵌套
3. 尽量不要出现需要用户输入转义符的情况
4. 纯原生实现，方便转换到其它语言

错误兼容上的目标：
1. 无论如何不能让错位的bbcode影响到外层的样式
2. 在遇到错误的bbcode的时候要尽可能保留更多的字符
3. 让错位的标签尽快结束，以避免影响到后面的标签


## 构建
javascript:
`npm run build--prod`

php:
目前直接是人工转换ts到php，人工保证特性同步

## 现有功能说明
javascript:  
支持bbcode2html，可以提供forEditor参数选择为ckeditor编辑器生成html代码，ckeditor的相关插件另外实现  
支持html2bbcode，在格式正确(该有的data属性都有)的情况下不管是不是forEditor生成的html都能够反向转换成bbcode

php:
只支持bbcode2html，目标是将数据库中的内容渲染到页面上，不提供editor相关功能  
转换时增加xss过滤