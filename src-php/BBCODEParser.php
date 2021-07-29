<?php

namespace bbcode_parser;
require_once(dirname(__FILE__) . "/tag/TagHandler.php");

class BBCODEParser {
    private static $STATE_NORMAL = 0;
    private static $STATE_BBCODE_OPEN_START = 1;
    private static $STATE_BBCODE_CLOSE_START = 2;
    public static $TYPE_TEXT = 0;
    public static $TYPE_BBCODE_OPEN = 1;
    public static $TYPE_BBCODE_CLOSE = 2;

    private $TAG_HANDLER_LIST = [];

    function transformAsIs($tagName, $arg, $content): string {
        if ($arg) {
            $openTag = $tagName . "=" . $arg;
        } else {
            $openTag = $tagName;
        }
        return "[" . $openTag . "]" . $content . "[/" . $tagName . "]";
    }

    function transformTag($tagLabel, $content, $arg, &$env): string {
        if (empty($content)) {
            $content = "";
        }
        $tagLabel = mb_substr($tagLabel, 1, null, BBCODE_STRING_CHARSET);
        $handler = $this->getHandler($tagLabel);
        if ($handler) {
            $result = $handler->encodeToHtml($tagLabel, $arg, $content, $env);
            if (is_string($result)) {
                return $result;
            }
        }
        return $this->transformAsIs($tagLabel, $arg, $content);
    }

    function registerTagHandler($handler) {
        $this->TAG_HANDLER_LIST[] = $handler;
    }

    function getHandler($tagLabel) {
        foreach ($this->TAG_HANDLER_LIST as $handler) {
            if ($handler->match($tagLabel)) {
                return $handler;
            }
        }
        return null;
    }

    function bbcode2html($rawContent, &$env) {
        $rawContent = preg_replace('/\xC2\xA0/', ' ', $rawContent);
        $rawContent = preg_replace('/\u200B/', '', $rawContent);
        $stack = [];
        $parentMap = [];
        $state = self::$STATE_NORMAL;
        $tmp = "";
        $customParserState = 0;
        $rawContentLen = mb_strlen($rawContent, BBCODE_STRING_CHARSET);
        for ($idx = 0; $idx < $rawContentLen; $idx++) {
            $char = mb_substr($rawContent, $idx, 1, BBCODE_STRING_CHARSET);
            switch ($char) {
                case "[":
                {
                    if ($state === self::$STATE_NORMAL && $idx < mb_strlen($rawContent, BBCODE_STRING_CHARSET)) {
                        if (mb_strlen($tmp, BBCODE_STRING_CHARSET) > 0) {
                            array_push($stack, ["type" => self::$TYPE_TEXT, "value" => TagHandler::filterXSS($tmp)]);
                        }
                        $tmp = "[";
                        if (mb_substr($rawContent, $idx + 1, 1, BBCODE_STRING_CHARSET) === "/") {
                            $state = self::$STATE_BBCODE_CLOSE_START;
                            $tmp .= "/";
                            $idx++;
                        } else {
                            $state = self::$STATE_BBCODE_OPEN_START;
                        }
                    } else if ($state === self::$STATE_BBCODE_OPEN_START || $state === self::$STATE_BBCODE_CLOSE_START) {
                        if (mb_strlen($tmp, BBCODE_STRING_CHARSET) > 0) {
                            $stack[] = ["type" => self::$TYPE_TEXT, "value" => TagHandler::filterXSS($tmp)];
                            $tmp = "[";
                        }
                    } else {
                        $tmp .= $char;
                    }
                    break;
                }
                case "]":
                {
                    if ($state === self::$STATE_BBCODE_OPEN_START) {
                        $arg = '';
                        $argIdx = mb_strpos($tmp, "=", 0, BBCODE_STRING_CHARSET);
                        if ($argIdx <= 0) {
                            $argIdx = mb_strpos($tmp, " ", 0, BBCODE_STRING_CHARSET);
                        }
                        if ($argIdx > 0) {
                            $arg = mb_substr($tmp, $argIdx + 1, null, BBCODE_STRING_CHARSET);
                            $tag = mb_substr($tmp, 0, $argIdx, BBCODE_STRING_CHARSET);
                        } else {
                            $tag = $tmp;
                        }
                        $realTag = mb_substr($tag, 1, null, BBCODE_STRING_CHARSET);
                        $handler = $this->getHandler($realTag);
                        $allowHandler = false;
                        if ($handler) {
                            $allowParents = $handler->allowParents($realTag);
                            if (!empty($allowParents)) {
                                foreach ($allowParents as $parentName) {
                                    if (!empty($parentMap[$parentName])) {
                                        $allowHandler = true;
                                        break;
                                    }
                                }
                            } else {
                                $allowHandler = true;
                            }
                        }
                        if ($allowHandler) {
                            if ($handler->isSelfClose()) {
                                $stack[] = [
                                    "type"  => self::$TYPE_TEXT,
                                    "value" => $this->transformTag($tag, "", TagHandler::filterXSS($arg), $env)
                                ];
                            } else {
                                $stack[] = [
                                    "type"          => self::$TYPE_BBCODE_OPEN,
                                    "value"         => $tag,
                                    "arg"           => TagHandler::filterXSS($arg),
                                    "customParser"  => $handler->useCustomParser($realTag),
                                    "contentOffset" => $idx + 1,
                                ];
                                if ($handler->useCustomParser($realTag)) {
                                    $customParserState++;
                                }
                                $parentMap[$realTag] = $parentMap[$realTag] ? $parentMap[$realTag] + 1 : 1;
                            }

                            $tmp = "";
                        } else {
                            $tmp .= "]";
                        }
                        $state = self::$STATE_NORMAL;
                    } else if ($state === self::$STATE_BBCODE_CLOSE_START) {
                        $tag = mb_substr($tmp, 2, null, BBCODE_STRING_CHARSET);
                        $handler = $this->getHandler($tag);
                        if ($handler && !$handler->isSelfClose()) {
                            if ($customParserState > 0 && !$handler->useCustomParser($tag)) {
                                $stack[] = [
                                    "type"  => self::$TYPE_BBCODE_CLOSE,
                                    "value" => $tag
                                ];
                                $tmp = "";
                                $state = self::$STATE_NORMAL;
                                break;
                            }
                            $content = "";
                            $successClosed = false;
                            $subStack = [];
                            while (true) {
                                $node = array_pop($stack);
                                if (!$node) {
                                    break;
                                }
                                switch ($node['type']) {
                                    case self::$TYPE_TEXT:
                                    {
                                        $subStack[] = $node;
                                        $content = $node['value'] . $content;
                                        break;
                                    }
                                    case self::$TYPE_BBCODE_OPEN:
                                    {
                                        $subStack[] = $node;
                                        $subTag = mb_substr($node['value'], 1, null, BBCODE_STRING_CHARSET);
                                        if ($parentMap[$subTag]) {
                                            $parentMap[$subTag] = max($parentMap[$subTag] - 1, 0);
                                        }
                                        if ($tag === $subTag) {
                                            if ($node['customParser']) {
                                                $stack[] = [
                                                    "type"  => self::$TYPE_TEXT,
                                                    "value" => $handler->parseStackToHtml($subStack, $rawContent, $node['contentOffset'], $idx - mb_strlen($tmp, BBCODE_STRING_CHARSET), $this, $env)
                                                ];
                                                $customParserState--;
                                            } else if ($customParserState > 0) {
                                                $stack[] = $node;
                                                $stack[] = [
                                                    "type"  => self::$TYPE_TEXT,
                                                    "value" => $content
                                                ];
                                                $stack[] = [
                                                    "type"  => self::$TYPE_BBCODE_CLOSE,
                                                    "value" => $tag
                                                ];
                                            } else {
                                                $stack[] = [
                                                    "type"  => self::$TYPE_TEXT,
                                                    "value" => $this->transformTag($node['value'], $content, $node['arg'], $env)
                                                ];
                                            }
                                            $subStack = [];
                                            $content = "";
                                            $successClosed = true;
                                            break 2;
                                        } else {
                                            $content = $this->transformTag($node['value'], $content, $node['arg'], $env);
                                        }
                                        break;
                                    }
                                    case self::$TYPE_BBCODE_CLOSE:
                                    {
                                        $subStack[] = $node;
                                        break;
                                    }
                                }
                            }
                            if (!$successClosed) {
                                $content .= $tmp . ']';
                            }
                            if (!empty($content)) {
                                $stack[] = ["type" => self::$TYPE_TEXT, "value" => $content];
                            }
                            $tmp = "";
                        } else {
                            $tmp .= "]";
                        }
                        $state = self::$STATE_NORMAL;
                    } else {
                        $tmp .= $char;
                    }
                    break;
                }
                case '\r':
                    break;
                default:
                {
                    $tmp .= $char;
                }
            }
        }
        $result = "";
        $node = null;
        while ($node = array_pop($stack)) {
            if ($node["type"] === self::$TYPE_BBCODE_OPEN) {
                if (!empty($tmp)) {
                    $result .= $tmp;
                    $tmp = "";
                }
                $result = $this->transformTag($node["value"], $result, $node["arg"], $env);
            } else if ($node["type"] === self::$TYPE_TEXT) {
                $result = $node["value"] . $result;
            }
        }
        if (!empty($tmp)) {
            $result .= TagHandler::filterXSS($tmp);
        }
        return mb_ereg_replace('\n', '<br/>', $result, BBCODE_STRING_CHARSET);
    }
}
