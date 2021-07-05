<?php
namespace bbcode_parser;
require_once(dirname(__FILE__) . "../TagHandler.php");

class TagHandlerImage extends TagHandler {
    function tagName() {
        return "img";
    }

    public function isSelfClose() {
        return true;
    }

    function encodeToHtml($tagLabel, $arg, $content) {
        $args = $this->splitArgs($arg);

        // alt没必要所以不加
        /** @noinspection HtmlRequiredAltAttribute */
        return "<img src=\"$arg\"/>";
    }
}
