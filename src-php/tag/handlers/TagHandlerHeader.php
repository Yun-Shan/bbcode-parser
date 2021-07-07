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

    function encodeToHtml($tagLabel, $arg, $content, &$env) {
        if (empty($content) || empty(preg_replace('/\s+/u', '', $content))) {
            return "";
        }
        $tagLabel = mb_strtolower($tagLabel, BBCODE_STRING_CHARSET);
        return "<$tagLabel>$content</$tagLabel>";
    }
}
