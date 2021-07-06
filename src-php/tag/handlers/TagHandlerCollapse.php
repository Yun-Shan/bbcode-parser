<?php
namespace bbcode_parser;
require_once(dirname(__FILE__) . "/../TagHandler.php");

class TagHandlerCollapse extends TagHandler {
    function tagName() {
        return "collapse";
    }

    function encodeToHtml($tagLabel, $arg, $content, $env) {
        if ($arg && mb_strpos($arg, "title=", 0, BBCODE_STRING_CHARSET) === 0) {
            $arg = mb_substr($arg, 6, null, BBCODE_STRING_CHARSET);
        }
        if (!$arg) {
            $arg = "点击展开";
        }
        return "<div data-tag=\"collapse\"><details><summary><b class=\"collapse-title\">$arg</b></summary><div class=\"collapse-content\">$content</div></details></div>";
    }
}
