<?php
namespace bbcode_parser;
require_once(dirname(__FILE__) . "../TagHandler.php");

class TagHandlerLink extends TagHandler {
    function tagName() {
        return "url";
    }

    function encodeToHtml($tagLabel, $arg, $content) {
        if (!$content) {
            return "";
        }
        if (!$arg) {
            $arg = '#';
        } else if (!preg_match('/^((https|http):\/\/)[^\s]+$/', $arg)) {
            $arg = 'http://' . $arg;
        }
        return "<a href=\"$arg\" data-tag=\"url\">$content</a>";
    }
}
