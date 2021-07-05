<?php
namespace bbcode_parser;
require_once(dirname(__FILE__) . "/../TagHandler.php");

class TagHandlerDice extends TagHandler {
    function tagName() {
        return "dice";
    }

    function encodeToHtml($tagLabel, $arg, $content) {
        if (!$content) {
            return "";
        }
        if (preg_match("/^((\\d+)|(\\d*d\\d+))(\\+((\\d+)|(\\d*d\\d+)))*$/", $content)) {
            if (function_exists('dice_expression_to_html')) {
                $diceResult = dice_expression_to_html($content);
                if (!$diceResult) {
                    return false;
                }
            } else {
                $diceResult = "假装有骰娘：$content=" . rand(0, 200);
            }
            return "<div class=\"dice\">$diceResult</div>";
        }
        return false;
    }
}
