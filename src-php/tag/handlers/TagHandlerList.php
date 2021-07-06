<?php
namespace bbcode_parser;
require_once(dirname(__FILE__) . "/../TagHandler.php");

class TagHandlerList extends TagHandler {
    function tagName() {
        return "list";
    }

    public function tagAliases() {
        return ['*'];
    }

    public function allowParents($tagLabel) {
        return $tagLabel === '*' ? ['list'] : [];
    }

    function encodeToHtml($tagLabel, $arg, $content, $env) {
        if (!$content) {
            return "";
        }
        $tag = '';
        switch ($tagLabel) {
            case 'list':
                $tag = intval($arg) ? 'ol' : 'ul';
                break;
            case '*':
                $tag = 'li';
                break;
            default:
                return $content;
        }
        return "<$tag>$content</$tag>";
    }
}
