<?php
namespace bbcode_parser;
require_once(dirname(__FILE__) . "/../TagHandler.php");

class TagHandlerBlockquote extends TagHandler {
    function tagName() {
        return "quote";
    }
    function tagAliases() {
        return ['blockquote'];
    }

    function encodeToHtml($tagLabel, $arg, $content, &$env) {
        if (!$content) {
            return "";
        }
        return "<blockquote data-tag=\"quote\"><p>$content</p></blockquote>";
    }
}
