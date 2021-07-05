<?php
namespace bbcode_parser;
require_once(dirname(__FILE__) . "/../TagHandler.php");

class TagHandlerBold extends TagHandler {
    function tagName() {
        return "b";
    }

    function encodeToHtml($tagLabel, $arg, $content) {
        if (!$content) {
            return "";
        }
        return "<b>$content</b>";
    }
}
