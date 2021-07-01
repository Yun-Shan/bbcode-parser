# YS bbcode-parser
***觉得好用的话不妨点个star***

因为找不到好用的可扩展的bbcode解析器，所以自己实现了一个  
该解析器使用状态机实现

功能上的目标：
1. 可扩展
2. 可任意嵌套
3. 尽量不要出现需要用户输入转义符的情况
4. 纯原生实现，方便构建到其它语言

错误兼容上的目标：
1. 无论如何不能让错位的bbcode影响到外层的样式
2. 在遇到错误的bbcode的时候要尽可能保留更多的字符
3. 让错位的标签尽快结束，以避免影响到后面的标签


## 构建
javascript:
`npm run build--prod`  
php:
`npm run build--php`
> 构建php需要先安装ts2php：`npm i -g ts2php`
