<?php
namespace bbcode_parser;
require_once(dirname(__FILE__) . "/../TagHandler.php");

class TagHandlerColor extends TagHandler {
    function tagName() {
        return "color";
    }

    function encodeToHtml($tagLabel, $arg, $content, &$env) {
        if (!$content) {
            return "";
        }
        if (!$arg) {
            return $content;
        }
        $arg = $this->checkColor($arg);
        if (!$arg) {
            return $content;
        }
        return "<span data-color=\"$arg\" data-tag=\"color\" style=\"color: $arg\">$content</span>";
    }
}
