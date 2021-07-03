import { BBCODEParser } from './BBCODEParser';
import { TagHandler } from './tag/TagHandler';
import { TagHandlerBold } from './tag/handlers/TagHandlerBold';
import { TagHandlerItalic } from './tag/handlers/TagHandlerItalic';
import { TagHandlerColor } from './tag/handlers/TagHandlerColor';
import { TagHandlerMask } from './tag/handlers/TagHandlerMask';
import { TagHandlerCollapse } from './tag/handlers/TagHandlerCollapse';
import { TagHandlerDice } from './tag/handlers/TagHandlerDice';
import { TagHandlerUnderline } from './tag/handlers/TagHandlerUnderline';
import { TagHandlerStrike } from './tag/handlers/TagHandlerStrike';
import { TagHandlerImage } from './tag/handlers/TagHandlerImage';
import { TagHandlerHorizontalRule } from './tag/handlers/TagHandlerHorizontalRule';

const defaultBBCodeParser = new BBCODEParser();
defaultBBCodeParser.registerTagHandler(new TagHandlerBold());
defaultBBCodeParser.registerTagHandler(new TagHandlerItalic());
defaultBBCodeParser.registerTagHandler(new TagHandlerUnderline());
defaultBBCodeParser.registerTagHandler(new TagHandlerStrike());
defaultBBCodeParser.registerTagHandler(new TagHandlerColor());
defaultBBCodeParser.registerTagHandler(new TagHandlerMask());
defaultBBCodeParser.registerTagHandler(new TagHandlerCollapse());
defaultBBCodeParser.registerTagHandler(new TagHandlerDice());
defaultBBCodeParser.registerTagHandler(new TagHandlerImage());
defaultBBCodeParser.registerTagHandler(new TagHandlerHorizontalRule());

export { defaultBBCodeParser, TagHandler };

declare var global: any;
global.BBCODE = {
    newParser: function () {
        return new BBCODEParser();
    },
    defaultParser: defaultBBCodeParser,
    bbcode2html: function (rawContent: string) {
        return defaultBBCodeParser.bbcode2html(rawContent);
    },
    html2bbcode: function (html: string) {
        return defaultBBCodeParser.html2bbcode(html);
    }
};
