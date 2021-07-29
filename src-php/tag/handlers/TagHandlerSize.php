<?php
namespace bbcode_parser;
require_once(dirname(__FILE__) . "/../TagHandler.php");

class TagHandlerSize extends TagHandler {
    function tagName() {
        return "size";
    }

    private static $sizeMap = [0, '12px','13px','16px','18px','24px','32px','48px'];

    function encodeToHtml($tagLabel, $arg, $content, &$env) {
        if (!$content) {
            return "";
        }
        if (!$arg) {
            return $content;
        }
        // 这里因为要支持1-7这样的特殊格式的文字大小，所以不使用checkSize而是自行判断
        if (preg_match('/^[1-7]$/', $arg)) {
            $size = self::$sizeMap[intval($arg)];
            $sizeLabel = $arg;
        } else if (preg_match('/^\d+(\.\d+)?px$/', $arg)) {
            $size = floatval($arg);
            if (is_nan($size) || $size < 10 || $size > 50) {
                $size = 13;
            }
            $sizeLabel = $size .= 'px';
        } else {
            return $content;
        }
        return "<span data-size=\"$sizeLabel\" data-tag=\"size\" style=\"font-size: $size\">$content</span>";
    }
}
