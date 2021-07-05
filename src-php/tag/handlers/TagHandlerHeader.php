<?php
namespace bbcode_parser;
require_once(dirname(__FILE__) . "/../TagHandler.php");

class TagHandlerHeader extends TagHandler {
    function tagName() {
        return "h1";
    }

    public function tagAliases() {
        return ['h2', 'h3'];
    }

    function encodeToHtml($tagLabel, $arg, $content) {
        if (empty($content) || empty(trim($content))) {
            return "";
        }
        $tagLabel = mb_strtolower($tagLabel, BBCODE_STRING_CHARSET);
        return "<$tagLabel>$content</$tagLabel>";
    }
}
