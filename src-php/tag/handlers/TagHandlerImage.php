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

    function encodeToHtml($tagLabel, $arg, $content, &$env) {
        $args = $this->splitArgs($arg);
        $src = $args[0] ?: '#';
        $width = count($args) > 1 ? $this->checkSize($args[1]) : '';
        $height = count($args) > 2 ? $this->checkSize($args[2]) : '';
        $float = count($args) > 3 ? $this->checkWhitelistValue($args[3], ['left', 'right']) : '';

        $result = $this->combineAttributes([
            'src'=> $src,
            'style' => $this->combineStyles([
                'width'=> $width,
                'height'=> $height,
                'float'=> $float,
            ])
        ]);
        if (empty($result)) {
            return false;
        }
        return '<img' . $result . '/>';
    }
}
