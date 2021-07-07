<?php
namespace bbcode_parser;
require_once(dirname(__FILE__) . "/../TagHandler.php");

class TagHandlerAlign extends TagHandler {
    function tagName() {
        return "align";
    }

    public function tagAliases() {
        return ['left', 'right', 'center'];
    }

    function encodeToHtml($tagLabel, $arg, $content, &$env) {
        if (!$content) {
            return "";
        }
        if ($tagLabel === 'align') {
            if ($arg === 'left' || $arg === 'right' || $arg === 'center') {
                $align = $arg;
            } else {
                return false;
            }
        } else {
            $align = $tagLabel;
        }
        return "<div style=\"text-align: $align\" data-tag=\"align\">$content</div>";
    }
}
