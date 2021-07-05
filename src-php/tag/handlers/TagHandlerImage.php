<?php
namespace bbcode_parser;
require_once(dirname(__FILE__) . "/../TagHandler.php");

class TagHandlerImage extends TagHandler {
    function tagName() {
        return "img";
    }

    public function isSelfClose() {
        return true;
    }

    function encodeToHtml($tagLabel, $arg, $content) {
        $args = $this->splitArgs($arg);
        $src = $args[0] ?: '#';
        $width = count($args) > 1 ? intval($args[1]) : '';
        $height = count($args) > 2 ? intval($args[2]) : '';
        $float = count($args) > 3 ? $args[3] : '';

        $result = "<img src=\"$src\"";
        $styleValue = '';
        if ($width > 0) {
            $styleValue .= 'width:' . $width . 'px;';
        }
        if ($height > 0) {
            $styleValue .= 'height:' . $height . 'px;';
        }
        switch ($float) {
            case 'left': $styleValue .= 'float:left;'; break;
            case 'right': $styleValue .= 'float:right;'; break;
            default: break;
        }
        if ($styleValue) {
            $result .= ' style="' . $styleValue . '"';
        }
        return $result . '/>';
    }
}
