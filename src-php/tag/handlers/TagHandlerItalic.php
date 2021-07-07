<?php
namespace bbcode_parser;
require_once(dirname(__FILE__) . "/../TagHandler.php");

class TagHandlerItalic extends TagHandler {
    function tagName() {
        return "i";
    }

    function encodeToHtml($tagLabel, $arg, $content, &$env) {
        if (!$content) {
            return "";
        }
        return "<i>$content</i>";
    }
}

