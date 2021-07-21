<?php
namespace bbcode_parser;
require_once(dirname(__FILE__) . "/../TagHandler.php");

class TagHandlerCode extends TagHandler {
    function tagName() {
        return "code";
    }

    public function useCustomParser() {
        return true;
    }

    public function parseStackToHtml($stack, $rawContent, $startIdx, $endIdx, $parser, &$env) {
        $content = mb_substr($rawContent, $startIdx, $endIdx - $startIdx, BBCODE_STRING_CHARSET);
        $content = TagHandler::filterXSS($content);
        return '<pre class="code">' . $content . '</pre>';
    }

    function encodeToHtml($tagLabel, $arg, $content, &$env) {
        return false;
    }
}
