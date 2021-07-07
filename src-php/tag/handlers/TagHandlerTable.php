<?php

namespace bbcode_parser;
require_once(dirname(__FILE__) . "/../TagHandler.php");

class TagHandlerTable extends TagHandler
{
    function tagName() {
        return "table";
    }

    public function tagAliases() {
        return ['tr', 'td'];
    }

    public function allowParents($tagLabel) {
        switch ($tagLabel) {
            case 'tr':
                return ['table'];
            case 'td':
                return ['tr'];
            default:
                return [];
        }
    }

    function encodeToHtml($tagLabel, $arg, $content, &$env) {
        $args = $this->splitArgs($arg);
        switch ($tagLabel) {
            case 'td':
                $width = count($args) > 0 ? $this->checkSize($args[0]) : '';
                $height = count($args) > 1 ? $this->checkSize($args[1]) : '';
                $bgcolor = count($args) > 2 ? $this->checkColor($args[2]) : '';
                $alignH = count($args) > 3 ? $this->checkAlign($args[3]) : '';
                $alignV = count($args) > 4 ? $this->checkAlign($args[4]) : '';
                $rowspan = count($args) > 5 ? (intval($args[5]) > 1 ? intval($args[5]) : 0) : '';
                $colspan = count($args) > 6 ? (intval($args[6]) > 1 ? intval($args[6]) : 0) : '';
                $result = $this->combineAttributes([
                    'rowspan' => $rowspan,
                    'colspan' => $colspan,
                    'style'   => $this->combineStyles([
                        'width'            => $width,
                        'height'           => $height,
                        'text-align'       => $alignH,
                        'vertical-align'   => $alignV,
                        'background-color' => $bgcolor,
                    ])
                ]);
                return '<td' . $result . '>' . $content . '</td>';
            case 'tr':
                $height = count($args) > 0 ? $this->checkSize($args[0]) : '';
                $bgcolor = count($args) > 1 ? $this->checkColor($args[1]) : '';
                $result = $this->combineAttributes([
                    'style' => $this->combineStyles([
                        'height'           => $height,
                        'background-color' => $bgcolor,
                    ])
                ]);
                return '<tr' . $result . '>' . $content . '</tr>';
            case 'table':
                $width = count($args) > 0 ? $this->checkSize($args[0]) : '';
                // 兼容某个离谱的前端框架
                if ($width) {
                    $width .= ' !important';
                } else {
                    $width .= 'auto !important';
                }
                $height = count($args) > 1 ? $this->checkSize($args[1]) : '';
                $bgcolor = count($args) > 2 ? $this->checkColor($args[2]) : '';
                $alignH = count($args) > 3 ? $this->checkAlign($args[3]) : '';
                $cellSpacing = count($args) > 4 ? intval($args[4]) : '';
                $cellPadding = count($args) > 5 ? intval($args[5]) : '';
                $result = $this->combineAttributes([
                    'align'       => $alignH,
                    'cellspacing' => $cellSpacing,
                    'cellpadding' => $cellPadding,
                    'style'       => $this->combineStyles([
                        'width'            => $width,
                        'height'           => $height,
                        'background-color' => $bgcolor,
                    ])
                ]);
                return '<table' . $result . '>' . $content . '</table>';
            default:
                return $content;
        }
    }
}
