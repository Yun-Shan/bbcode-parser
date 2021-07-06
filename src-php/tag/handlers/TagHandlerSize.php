<?php
namespace bbcode_parser;
require_once(dirname(__FILE__) . "/../TagHandler.php");

class TagHandlerSize extends TagHandler {
    function tagName() {
        return "size";
    }

    function encodeToHtml($tagLabel, $arg, $content, $env) {
        if (!$content) {
            return "";
        }
        if (!$arg || !preg_match('/^[1-7]$/', $arg)) {
            return $content;
        }
        // 只有font能同时兼容行内元素和块状元素，所以即便是font被弃用也得用这个
        /** @noinspection HtmlDeprecatedTag */
        /** @noinspection HtmlDeprecatedAttribute */
        return "<font size=\"$arg\" data-tag=\"size\">$content</font>";
    }
}
