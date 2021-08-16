<?php

namespace bbcode_parser;
require_once(dirname(__FILE__) . "/../TagHandler.php");

class TagHandlerAudio extends TagHandler
{
    function tagName() {
        return "audio";
    }

    public function isSelfClose() {
        return true;
    }

    private static $typeMap = [
        'netease'   => '<iframe src="//music.163.com/outchain/player?type=2&id=__AUDIO_VALUE__&auto=0&height=66" frameborder="no" border="0" marginwidth="0" marginheight="0" width="95%" height="86"></iframe>',
    ];

    function encodeToHtml($tagLabel, $arg, $content, &$env) {
        if (!$arg) {
            return '';
        }
        $args = $this->splitArgs($arg);
        $type = count($args) > 0 ? $args[0] : '';
        $value = count($args) > 1 ? intval($args[1]) : '';
        if (!$type || !$value || empty(self::$typeMap[$type])) {
            return "[$tagLabel=$arg]";
        }
        $template = self::$typeMap[$type];

        return '<div data-tag="audio">' . preg_replace('/__AUDIO_VALUE__/', $value, $template) . '</div>';
    }
}
