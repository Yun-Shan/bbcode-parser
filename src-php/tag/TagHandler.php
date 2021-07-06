<?php

namespace bbcode_parser;
define('BBCODE_STRING_CHARSET', 'UTF-8');

abstract class TagHandler
{
    abstract function tagName();

    function tagAliases() {
        return [];
    }

    function match($tagLabel) {
        if ($tagLabel === $this->tagName()) {
            return true;
        }
        foreach ($this->tagAliases() as $alias) {
            if ($tagLabel === $alias) {
                return true;
            }
        }
        return false;
    }

    abstract function encodeToHtml($tagLabel, $arg, $content, $env);

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
