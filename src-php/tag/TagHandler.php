<?php

namespace bbcode_parser;
define('BBCODE_STRING_CHARSET', 'UTF-8');

abstract class TagHandler
{
    abstract function tagName();

    function tagAliases() {
        return [];
    }

    abstract function encodeToHtml($tagLabel, $arg, $content);

    function isSelfClose() {
        return false;
    }

    function allowParents($tagLabel) {
        return [];
    }

    function splitArgs($rawArg) {
        return preg_split('/;/u', $rawArg);
    }
}
