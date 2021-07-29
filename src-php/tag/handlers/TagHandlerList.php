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

    public function useCustomParser($tagLabel) {
        return $tagLabel === 'list';
    }

    public function parseStackToHtml($stack, $rawContent, $startIdx, $endIdx, $parser, &$env) {
        $result = '';
        $tmp = '';
        $tmpStack = [];
        foreach ($stack as $node) {
            switch ($node["type"]) {
                case BBCODEParser::$TYPE_TEXT:
                {
                    $tmp = $node['value'] . $tmp;
                    break;
                }
                case BBCODEParser::$TYPE_BBCODE_OPEN:
                {
                    $subTag = mb_substr($node['value'], 1, null, BBCODE_STRING_CHARSET);
                    switch ($subTag) {
                        case 'list':
                        {
                            $tagName = $node['arg'] ? 'ol' : 'ul';
                            if (trim($tmp)) {
                                $endChar = mb_substr($tmp, -1, 1, BBCODE_STRING_CHARSET);
                                if ($endChar === "\n") {
                                    $tmp .= '&#8203;';
                                }
                                $result = '<li>' . $tmp . '</li>' . $result;
                            }
                            $result = '<' . $tagName . '>' . $result . '</' . $tagName . '>';
                            $tmp = '';
                            break;
                        }
                        case '*':
                        {
                            $endChar = mb_substr($tmp, -1, 1, BBCODE_STRING_CHARSET);
                            if ($endChar === "\n") {
                                $tmp .= '&#8203;';
                            }
                            $result = '<li>' . $tmp . '</li>' . $result;
                            $tmp = '';
                            break;
                        }
                        default:
                        {
                            $tmp = $parser->transformTag($node['value'], $tmp, $node['arg'], $env) . array_pop($tmpStack);
                            break;
                        }
                    }
                    break;
                }
                case BBCODEParser::$TYPE_BBCODE_CLOSE:
                {
                    $tmpStack[] = $tmp;
                    $tmp = '';
                    break;
                }
            }
        }
        return $result;
    }

    function encodeToHtml($tagLabel, $arg, $content, &$env) {
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
