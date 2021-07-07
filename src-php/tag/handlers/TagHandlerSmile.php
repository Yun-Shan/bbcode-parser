<?php
namespace bbcode_parser;
require_once(dirname(__FILE__) . "/../TagHandler.php");

class TagHandlerSmile extends TagHandler {
    function tagName() {
        return "smile";
    }

    public function match($tagLabel) {
        return preg_match('/^s(-\d+)+$/',$tagLabel);
    }

    public function isSelfClose() {
        return true;
    }

    function encodeToHtml($tagLabel, $arg, $content, &$env) {
        return "[$tagLabel]";
    }
}
