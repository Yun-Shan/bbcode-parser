<?php

namespace bbcode_parser;
require_once(dirname(__FILE__) . "/../TagHandler.php");

class TagHandlerAudio extends TagHandler {
    function tagName() {
        return "audio";
    }

    public function isSelfClose() {
        return true;
    }

    private static $typeMap = [
        'netease' => [
            'name'      => '网易云音乐',
            'templates' => [
                'default'  => 'song',
                // 单曲
                'song'     => '<iframe src="//music.163.com/outchain/player?type=2&id=__AUDIO_VALUE__&auto=0&height=66" frameborder="no" border="0" marginwidth="0" marginheight="0" width="95%" height="86"></iframe>',
                // 歌单
                'playlist' => '<iframe src="//music.163.com/outchain/player?type=0&id=__AUDIO_VALUE__&auto=0&height=280" frameborder="no" border="0" marginwidth="0" marginheight="0" width="95%" height="300"></iframe>',
                // 专辑
                'album'    => '<iframe src="//music.163.com/outchain/player?type=1&id=__AUDIO_VALUE__&auto=0&height=280" frameborder="no" border="0" marginwidth="0" marginheight="0" width="95%" height="300"></iframe>',
                // 电台
                'radio'    => '<iframe src="//music.163.com/outchain/player?type=4&id=__AUDIO_VALUE__&auto=0&height=280" frameborder="no" border="0" marginwidth="0" marginheight="0" width="95%" height="300"></iframe>',
                // 电台单曲
                'program'  => '<iframe src="//music.163.com/outchain/player?type=3&id=__AUDIO_VALUE__&auto=0&height=66" frameborder="no" border="0" marginwidth="0" marginheight="0" width="95%" height="86"></iframe>',
            ]
        ],
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
        $subtype = count($args) > 2 ? $args[2] : 'default';
        $typeInfo = self::$typeMap[$type];
        if ($subtype === 'default' || empty($typeInfo['templates'][$subtype])) {
            $subtype = $typeInfo['templates']['default'];
        }
        $template = $typeInfo['templates'][$subtype];

        return '<div data-tag="audio">' . preg_replace('/__AUDIO_VALUE__/', $value, $template) . '</div>';
    }
}
