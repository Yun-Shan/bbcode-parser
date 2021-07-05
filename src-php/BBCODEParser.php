<?php

namespace bbcode_parser;
require_once(dirname(__FILE__) . "./tag/TagHandler.php");

class BBCODEParser
{
    private static $STATE_NORMAL = 0;
    private static $STATE_BBCODE_OPEN_START = 1;
    private static $STATE_BBCODE_CLOSE_START = 2;
    private static $TYPE_TEXT = 0;
    private static $TYPE_BBCODE_OPEN = 1;
    private $TAG_HANDLER_MAP = [];
    private $TAG_ALIASES_MAP = [];

    function transformAsIs($tagName, $arg, $content) {
        if ($arg) {
            $openTag = $tagName . "=" . $arg;
        } else {
            $openTag = $tagName;
        }
        return "[" . $openTag . "]" . $content . "[/" . $tagName . "]";
    }

    function transformTag($tagLabel, $content, $arg) {
        if (empty($content)) {
            $content = "";
        }
        $tagLabel = mb_substr($tagLabel, 1, BBCODE_STRING_CHARSET);
        $tagName = $this->TAG_ALIASES_MAP[$tagLabel];
        if (!$tagName) {
            return $this->transformAsIs($tagLabel, $arg, $content);
        }
        $handler = $this->TAG_HANDLER_MAP[$tagName];
        if ($handler) {
            $result = $handler->handle($tagName, $arg, $content);
            if (is_string($result)) {
                return $result;
            }
        }
        return $this->transformAsIs($tagName, $arg, $content);
    }

    function filterXSS($str) {
        return preg_replace("/ /", "&nbsp;", htmlspecialchars($str, ENT_QUOTES | ENT_HTML401, BBCODE_STRING_CHARSET));
    }

    function registerTagHandler($handler) {
        $this->TAG_HANDLER_MAP[$handler->tagName()] = $handler;
        $this->TAG_ALIASES_MAP[$handler->tagName()] = $handler->tagName();
        foreach ($handler->tagAliases() as $alias) {
            $this->TAG_ALIASES_MAP[$alias] = $handler->tagName();
        }
    }

    /**
     * @param $tagName
     * @return TagHandler
     */
    function getHandler($tagName) {
        $tagName = $this->TAG_ALIASES_MAP[$tagName];
        return $this->TAG_HANDLER_MAP[$tagName];
    }

    function bbcode2html($rawContent) {
        $stack = [];
        $parentMap = [];
        $state = self::$STATE_NORMAL;
        $tmp = "";
        $rawContentLen = mb_strlen($rawContent, BBCODE_STRING_CHARSET);
        for ($idx = 0; $idx < $rawContentLen; $idx++) {
            $char = mb_substr($rawContent, $idx, 1, BBCODE_STRING_CHARSET);
            switch ($char) {
                case "[":
                {
                    if ($state === self::$STATE_NORMAL && $idx < mb_strlen($rawContent, BBCODE_STRING_CHARSET)) {
                        if (mb_strlen($tmp, BBCODE_STRING_CHARSET) > 0) {
                            array_push($stack, ["type" => self::$TYPE_TEXT, "value" => $this->filterXSS($tmp)]);
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
                            $stack[] = ["type" => self::$TYPE_TEXT, "value" => $this->filterXSS($tmp)];
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
                        $argIdx = mb_strpos($tmp,"=", 0, BBCODE_STRING_CHARSET);
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
                                $stack[] = ["type" => self::$TYPE_TEXT, "value" => $this->transformTag($tag, "", $this->filterXSS($arg))];
                            } else {
                                $stack[] = ["type" => self::$TYPE_BBCODE_OPEN, "value" => $tmp, "arg" => $this->filterXSS($arg)];
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
                            $content = "";
                            $successClosed = false;
                            while (true) {
                                $node = array_pop($stack);
                                if (!$node) {
                                    break;
                                }
                                switch ($node['type']) {
                                    case self::$TYPE_TEXT: {
                                        $content = $node['value'] . $content;
                                        break;
                                    }
                                    case self::$TYPE_BBCODE_OPEN: {
                                        $subTag = mb_substr($node['value'], 1, null, BBCODE_STRING_CHARSET);
                                        if ($parentMap[$subTag]) {
                                            $parentMap[$subTag] = max($parentMap[$subTag] - 1, 0);
                                        }
                                        if ($tag === $subTag) {
                                            $stack[] = ["type" => self::$TYPE_TEXT, "value" => $this->transformTag($node['value'], $content, $node['arg'])];
                                            $content = "";
                                            $successClosed = true;
                                            break 2;
                                        } else {
                                            $content = $this->transformTag($node['value'], $content, $node['arg']);
                                        }
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
                case "\n":
                {
                    $tmp .= "<br/>";
                    break;
                }
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
                $result = $this->transformTag($node["value"], $result, $node["arg"]);
            } else if ($node["type"] === self::$TYPE_TEXT) {
                $result = $node["value"] . $result;
            }
        }
        if (!empty($tmp)) {
            $result .= $tmp;
        }
        return $result;
    }
}