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

    function isSelfClose() {
        return false;
    }

    /**
     * 是否使用自定义解析
     * @return boolean
     */
    function useCustomParser() {
        return false;
    }

    function allowParents($tagLabel) {
        return [];
    }

    function parseStackToHtml($stack, $rawContent, $startIdx, $endIdx, $parser, &$env) {
        return '';
    }

    abstract function encodeToHtml($tagLabel, $arg, $content, &$env);

    function splitArgs($rawArg) {
        return preg_split('/;/u', $rawArg);
    }

    public static function filterXSS($str, $filterSpace = true) {
        if (!is_string($str)) {
            return $str;
        }
        $result = htmlspecialchars($str, ENT_QUOTES | ENT_HTML401, BBCODE_STRING_CHARSET);
        if ($filterSpace) {
            $result = preg_replace("/ /", "&nbsp;", $result);
        }
        return $result;
    }

    function combineAttributes($attrs) {
        $result = '';
        foreach ($attrs as $key => $val) {
            if ($val) {
                $result .= $key . '="' . self::filterXSS($val, false) . '"';
            }
        }
        if ($result) {
            $result = ' ' . $result;
        }
        return $result;
    }

    function combineStyles($styles) {
        $result = '';
        foreach ($styles as $key => $val) {
            if ($val) {
                $result .= $key . ':' . $val . ';';
            }
        }
        return $result;
    }

    function checkSize($val, $unit = 'px') {
        if (!$val) {
            return '';
        }
        if (preg_match('/^\d{1,4}(\.\d{1,4})?(px|%)$/', $val)) {
            return $val;
        }
        if (preg_match('/^\d{1,4}(\.\d{1,4})?$/', $val)) {
            return number_format($val, 2) . $unit;
        }
        return '';
    }

    function checkWhitelistValue($val, $whitelist = []) {
        foreach ($whitelist as $str) {
            if ($val === $str) {
                return $val;
            }
        }
        return '';
    }

    function checkColor($val) {
        if (!$val) {
            return '';
        }
        $val = preg_replace('/ +/u', '', $val);
        if (preg_match('/^((#[0-9a-fA-F]{3})|(#[0-9a-fA-F]{6})|([a-zA-Z]{1,20}))$/', $val)) {
            return $val;
        }
        if (preg_match('/^(rgb\(\d{1,3}(,\d{1,3}){2}\))|(rgba\(\d{1,3}(,\d{1,3}){2},(0\.)?\d{1,2}\))$/', $val)) {
            return $val;
        }
        if (preg_match('/^[0-9a-fA-F]{6}$/', $val)) {
            return '#' . $val;
        }
        return '';
    }

    function checkAlign($val) {
        if ($val
            && ($val === 'left' || $val === 'right' || $val === 'center' || $val === 'justify'
                || $val === 'top' || $val === 'bottom' || $val === 'middle' || $val === 'baseline')) {
            return $val;
        }
        return '';
    }
}
