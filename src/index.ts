import { BBCODEParser } from './BBCODEParser';
import { TagHandler } from './tag/TagHandler';
import { TagHandlerBold } from './tag/handlers/TagHandlerBold';
import { TagHandlerItalic } from './tag/handlers/TagHandlerItalic';
import { TagHandlerColor } from './tag/handlers/TagHandlerColor';
import { TagHandlerSize } from './tag/handlers/TagHandlerSize';
import { TagHandlerMask } from './tag/handlers/TagHandlerMask';
import { TagHandlerCollapse } from './tag/handlers/TagHandlerCollapse';
import { TagHandlerDice } from './tag/handlers/TagHandlerDice';
import { TagHandlerUnderline } from './tag/handlers/TagHandlerUnderline';
import { TagHandlerStrike } from './tag/handlers/TagHandlerStrike';
import { TagHandlerImage } from './tag/handlers/TagHandlerImage';
import { TagHandlerHorizontalRule } from './tag/handlers/TagHandlerHorizontalRule';
import { TagHandlerLink } from './tag/handlers/TagHandlerLink';
import { TagHandlerBlockquote } from './tag/handlers/TagHandlerBlockquote';
import { TagHandlerHeader } from './tag/handlers/TagHandlerHeader';
import { TagHandlerList } from './tag/handlers/TagHandlerList';

const defaultBBCodeParser = new BBCODEParser();
defaultBBCodeParser.registerTagHandler(new TagHandlerBold());
defaultBBCodeParser.registerTagHandler(new TagHandlerItalic());
defaultBBCodeParser.registerTagHandler(new TagHandlerUnderline());
defaultBBCodeParser.registerTagHandler(new TagHandlerStrike());
defaultBBCodeParser.registerTagHandler(new TagHandlerColor());
defaultBBCodeParser.registerTagHandler(new TagHandlerSize());
defaultBBCodeParser.registerTagHandler(new TagHandlerMask());
defaultBBCodeParser.registerTagHandler(new TagHandlerCollapse());
defaultBBCodeParser.registerTagHandler(new TagHandlerDice());
defaultBBCodeParser.registerTagHandler(new TagHandlerImage());
defaultBBCodeParser.registerTagHandler(new TagHandlerHorizontalRule());
defaultBBCodeParser.registerTagHandler(new TagHandlerLink());
defaultBBCodeParser.registerTagHandler(new TagHandlerBlockquote());
defaultBBCodeParser.registerTagHandler(new TagHandlerHeader());
defaultBBCodeParser.registerTagHandler(new TagHandlerList());

export { defaultBBCodeParser, TagHandler };

declare var global: any;
global.BBCODE = {
    newParser: function () {
        return new BBCODEParser();
    },
    defaultParser: defaultBBCodeParser,
    bbcode2html: function (rawContent: string, forEditor: boolean = false) {
        return defaultBBCodeParser.bbcode2html(rawContent, forEditor);
    },
    html2bbcode: function (html: string) {
        return defaultBBCodeParser.html2bbcode(html);
    }
};
