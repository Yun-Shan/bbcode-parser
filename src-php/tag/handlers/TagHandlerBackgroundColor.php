<?php
namespace bbcode_parser;
require_once(dirname(__FILE__) . "/../TagHandler.php");

class TagHandlerBackgroundColor extends TagHandler {
    function tagName() {
        return "bgcolor";
    }

    function encodeToHtml($tagLabel, $arg, $content, &$env) {
        if (!$content) {
            return "";
        }
        $arg = $this->checkColor($arg);
        if (!$arg) {
            return $content;
        }
        return "<span data-color=\"$arg\" data-tag=\"bgcolor\" style=\"background-color: $arg\">$content</span>";
    }
}
