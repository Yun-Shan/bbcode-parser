<?php
namespace bbcode_parser;
require_once(dirname(__FILE__) . "/../TagHandler.php");

class TagHandlerColor extends TagHandler {
    function tagName() {
        return "color";
    }

    function encodeToHtml($tagLabel, $arg, $content) {
        if (!$content) {
            return "";
        }
        if (!$arg) {
            return $content;
        }
        if (preg_match("/^[0-9a-fA-F]{6}$/", $arg)) {
            $arg = "#" . $arg;
        }
        // 只有font能同时兼容行内元素和块状元素，所以即便是font被弃用也得用这个
        /** @noinspection HtmlDeprecatedTag */
        /** @noinspection HtmlDeprecatedAttribute */
        return "<font color=\"$arg\" data-tag=\"color\">$content</font>";
    }
}
