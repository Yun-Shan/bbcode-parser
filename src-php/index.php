<?php
namespace bbcode_parser {
    require_once(dirname(__FILE__) . "/tag/handlers/TagHandlerBlockquote.php");
    require_once(dirname(__FILE__) . "/tag/handlers/TagHandlerBold.php");
    require_once(dirname(__FILE__) . "/tag/handlers/TagHandlerCollapse.php");
    require_once(dirname(__FILE__) . "/tag/handlers/TagHandlerColor.php");
    require_once(dirname(__FILE__) . "/tag/handlers/TagHandlerDice.php");
    require_once(dirname(__FILE__) . "/tag/handlers/TagHandlerHeader.php");
    require_once(dirname(__FILE__) . "/tag/handlers/TagHandlerHorizontalRule.php");
    require_once(dirname(__FILE__) . "/tag/handlers/TagHandlerImage.php");
    require_once(dirname(__FILE__) . "/tag/handlers/TagHandlerItalic.php");
    require_once(dirname(__FILE__) . "/tag/handlers/TagHandlerLink.php");
    require_once(dirname(__FILE__) . "/tag/handlers/TagHandlerList.php");
    require_once(dirname(__FILE__) . "/tag/handlers/TagHandlerMask.php");
    require_once(dirname(__FILE__) . "/tag/handlers/TagHandlerSize.php");
    require_once(dirname(__FILE__) . "/tag/handlers/TagHandlerStrike.php");
    require_once(dirname(__FILE__) . "/tag/handlers/TagHandlerUnderline.php");
    require_once(dirname(__FILE__) . "/tag/handlers/TagHandlerNotice.php");
    require_once(dirname(__FILE__) . "/tag/handlers/TagHandlerVideo.php");
    require_once(dirname(__FILE__) . "/BBCODEParser.php");
    global $defaultBBCodeParser;
    $defaultBBCodeParser = new BBCODEParser();
    $defaultBBCodeParser->registerTagHandler(new TagHandlerBlockquote());
    $defaultBBCodeParser->registerTagHandler(new TagHandlerBold());
    $defaultBBCodeParser->registerTagHandler(new TagHandlerCollapse());
    $defaultBBCodeParser->registerTagHandler(new TagHandlerColor());
    $defaultBBCodeParser->registerTagHandler(new TagHandlerDice());
    $defaultBBCodeParser->registerTagHandler(new TagHandlerHeader());
    $defaultBBCodeParser->registerTagHandler(new TagHandlerHorizontalRule());
    $defaultBBCodeParser->registerTagHandler(new TagHandlerImage());
    $defaultBBCodeParser->registerTagHandler(new TagHandlerItalic());
    $defaultBBCodeParser->registerTagHandler(new TagHandlerLink());
    $defaultBBCodeParser->registerTagHandler(new TagHandlerList());
    $defaultBBCodeParser->registerTagHandler(new TagHandlerMask());
    $defaultBBCodeParser->registerTagHandler(new TagHandlerSize());
    $defaultBBCodeParser->registerTagHandler(new TagHandlerStrike());
    $defaultBBCodeParser->registerTagHandler(new TagHandlerUnderline());
    $defaultBBCodeParser->registerTagHandler(new TagHandlerNotice());
    $defaultBBCodeParser->registerTagHandler(new TagHandlerVideo());
}

namespace {
    function bbcode2html($rawContent, $env) {
        global $defaultBBCodeParser;
        return $defaultBBCodeParser->bbcode2html($rawContent, $env);
    }
}

