<?php

namespace bbcode_parser;
require_once(dirname(__FILE__) . "/../TagHandler.php");

class TagHandlerVideo extends TagHandler
{
    function tagName() {
        return "video";
    }

    public function tagAliases(): array {
        return ['bvideo'];
    }

    public function isSelfClose(): bool {
        return true;
    }

    private static $typeMap = [
        'bvideo'   => '<iframe src="//player.bilibili.com/player.html?bvid=__VIDEO_VALUE__&page=1" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true" width="95%" height="600"></iframe>',
    ];

    public function __construct() {
        // 默认b站视频
        self::$typeMap['video'] = self::$typeMap['bvideo'];
    }

    function encodeToHtml($tagLabel, $arg, $content) {
        if (!$arg) {
            return '';
        }
        $template = self::$typeMap[$tagLabel];
        if (!$template) {
            return "[$template=$arg]";
        }

        return '<div data-tag="video">' . preg_replace('/__VIDEO_VALUE__/', $arg, $template) . '</div>';
    }
}
