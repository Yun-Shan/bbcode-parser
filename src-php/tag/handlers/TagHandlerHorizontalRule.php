<?php
namespace bbcode_parser;
require_once(dirname(__FILE__) . "/../TagHandler.php");

class TagHandlerHorizontalRule extends TagHandler {
    function tagName() {
        return "hr";
    }

    public function isSelfClose() {
        return true;
    }

    function encodeToHtml($tagLabel, $arg, $content, &$env) {
        return "<hr/>";
    }
}
