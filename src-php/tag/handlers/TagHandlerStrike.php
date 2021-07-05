<?php
namespace bbcode_parser;
require_once(dirname(__FILE__) . "../TagHandler.php");

class TagHandlerStrike extends TagHandler {
    function tagName() {
        return "s";
    }

    function encodeToHtml($tagLabel, $arg, $content) {
        if (!$content) {
            return "";
        }
        // 只有font能同时兼容行内元素和块状元素，所以即便是font被弃用也得用这个
        /** @noinspection HtmlDeprecatedTag */
        /** @noinspection HtmlDeprecatedAttribute */
        return "<s>$content</s>";
    }
}
