<?php
namespace bbcode_parser;
require_once(dirname(__FILE__) . "/../TagHandler.php");

class TagHandlerLink extends TagHandler {
    function tagName() {
        return "url";
    }

    function encodeToHtml($tagLabel, $arg, $content, &$env) {
        if (!$content) {
            return "";
        }
        if (!$arg) {
            $arg = $content;
        }
        if (!preg_match('/^((https|http):\/\/)[^\s]+$/', $arg)) {
            $arg = 'http://' . $arg;
        }
        return "<a href=\"$arg\" data-tag=\"url\">$content</a>";
    }
}
