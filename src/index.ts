import {BBCODEParser} from './BBCODEParser';
import {TagHandler} from './tag/TagHandler';
import {TagHandlerBold} from './tag/handlers/TagHandlerBold';
import {TagHandlerItalic} from './tag/handlers/TagHandlerItalic';
import {TagHandlerColor} from './tag/handlers/TagHandlerColor';
import {TagHandlerSize} from './tag/handlers/TagHandlerSize';
import {TagHandlerMask} from './tag/handlers/TagHandlerMask';
import {TagHandlerCollapse} from './tag/handlers/TagHandlerCollapse';
import {TagHandlerDice} from './tag/handlers/TagHandlerDice';
import {TagHandlerUnderline} from './tag/handlers/TagHandlerUnderline';
import {TagHandlerStrike} from './tag/handlers/TagHandlerStrike';
import {TagHandlerImage} from './tag/handlers/TagHandlerImage';
import {TagHandlerHorizontalRule} from './tag/handlers/TagHandlerHorizontalRule';
import {TagHandlerLink} from './tag/handlers/TagHandlerLink';
import {TagHandlerBlockquote} from './tag/handlers/TagHandlerBlockquote';
import {TagHandlerHeader} from './tag/handlers/TagHandlerHeader';
import {TagHandlerList} from './tag/handlers/TagHandlerList';
import {TagHandlerNotice} from "./tag/handlers/TagHandlerNotice";
import {TagHandlerVideo} from "./tag/handlers/TagHandlerVideo";
import {TagHandlerSmile} from "./tag/handlers/TagHandlerSmile";
import {TagHandlerBackgroundColor} from "./tag/handlers/TagHandlerBackgroundColor";
import {TagHandlerAlign} from "./tag/handlers/TagHandlerAlign";
import {TagHandlerTable} from "./tag/handlers/TagHandlerTable";
import {TagHandlerCode} from "./tag/handlers/TagHandlerCode";
import {TagHandlerAudio} from "./tag/handlers/TagHandlerAudio";

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
defaultBBCodeParser.registerTagHandler(new TagHandlerNotice());
defaultBBCodeParser.registerTagHandler(new TagHandlerVideo());
defaultBBCodeParser.registerTagHandler(new TagHandlerAudio());
defaultBBCodeParser.registerTagHandler(new TagHandlerSmile());
defaultBBCodeParser.registerTagHandler(new TagHandlerBackgroundColor());
defaultBBCodeParser.registerTagHandler(new TagHandlerAlign());
defaultBBCodeParser.registerTagHandler(new TagHandlerTable());
defaultBBCodeParser.registerTagHandler(new TagHandlerCode());

export { defaultBBCodeParser, TagHandler };

declare var global: any;
const _defaultStyle: any = {};
global.BBCODE = {
    get defaultStyle() {
        return _defaultStyle;
    },
    clearDefaultStyle: function() {
        for(let key in _defaultStyle){
            delete _defaultStyle[key];
        }
        return _defaultStyle;
    },
    newParser: function () {
        return new BBCODEParser();
    },
    defaultParser: defaultBBCodeParser,
    bbcode2html: function (rawContent: string, forEditor: boolean = false) {
        console.log('bbcode2html');
        return defaultBBCodeParser.bbcode2html(rawContent, forEditor);
    },
    html2bbcode: function (html: string, forEditor: boolean = false) {
        console.log('html2bbcode');
        return defaultBBCodeParser.html2bbcode(html, forEditor);
    }
};
