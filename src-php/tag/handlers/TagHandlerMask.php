<?php
namespace bbcode_parser;
require_once(dirname(__FILE__) . "/../TagHandler.php");

class TagHandlerMask extends TagHandler {
    function tagName() {
        return "mask";
    }

    function encodeToHtml($tagLabel, $arg, $content) {
        if (!$content) {
            return "";
        }
        return "<div class=\"mask\" title=\"你知道的太多了\">$content</div>";
    }
}
