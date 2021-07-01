import { TagHandlerBold } from './tag/handlers/TagHandlerBold';
import { TagHandlerItalic } from './tag/handlers/TagHandlerItalic';
import { TagHandlerColor } from './tag/handlers/TagHandlerColor';
import { TagHandlerMask } from './tag/handlers/TagHandlerMask';
import { TagHandlerCollapse } from './tag/handlers/TagHandlerCollapse';
import { TagHandlerDice } from './tag/handlers/TagHandlerDice';
import { BBCODEParser } from './BBCODEParser';

const defaultBBCodeParser = new BBCODEParser();
defaultBBCodeParser.registerTagHandler(new TagHandlerBold());
defaultBBCodeParser.registerTagHandler(new TagHandlerItalic());
defaultBBCodeParser.registerTagHandler(new TagHandlerColor());
defaultBBCodeParser.registerTagHandler(new TagHandlerMask());
defaultBBCodeParser.registerTagHandler(new TagHandlerCollapse());
defaultBBCodeParser.registerTagHandler(new TagHandlerDice());

export { defaultBBCodeParser };

