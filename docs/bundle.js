/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/tag/handlers/TagHandlerBold.ts":
/*!********************************************!*\
  !*** ./src/tag/handlers/TagHandlerBold.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TagHandlerBold": () => (/* binding */ TagHandlerBold)
/* harmony export */ });
var TagHandlerBold = /** @class */ (function () {
    function TagHandlerBold() {
        this.tagName = 'b';
        this.tagAliases = [];
    }
    TagHandlerBold.prototype.handle = function (tagLabel, arg, content) {
        return "<" + this.tagName + ">" + content + "</" + this.tagName + ">";
    };
    return TagHandlerBold;
}());



/***/ }),

/***/ "./src/tag/handlers/TagHandlerCollapse.ts":
/*!************************************************!*\
  !*** ./src/tag/handlers/TagHandlerCollapse.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TagHandlerCollapse": () => (/* binding */ TagHandlerCollapse)
/* harmony export */ });
var TagHandlerCollapse = /** @class */ (function () {
    function TagHandlerCollapse() {
        this.tagName = 'collapse';
        this.tagAliases = [];
    }
    TagHandlerCollapse.prototype.handle = function (tagLabel, arg, content) {
        if (!arg) {
            arg = "点击展开";
        }
        return "<details><summary>" + arg + "</summary>" + content + "</details>";
    };
    return TagHandlerCollapse;
}());



/***/ }),

/***/ "./src/tag/handlers/TagHandlerColor.ts":
/*!*********************************************!*\
  !*** ./src/tag/handlers/TagHandlerColor.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TagHandlerColor": () => (/* binding */ TagHandlerColor)
/* harmony export */ });
var TagHandlerColor = /** @class */ (function () {
    function TagHandlerColor() {
        this.tagName = 'color';
        this.tagAliases = [];
    }
    TagHandlerColor.prototype.handle = function (tagLabel, arg, content) {
        if (!arg) {
            return content;
        }
        if (arg.match(/^[0-9a-fA-F]{6}$/)) {
            arg = '#' + arg;
        }
        return "<span style=\"color:" + arg + "\">" + content + "</span>";
    };
    return TagHandlerColor;
}());



/***/ }),

/***/ "./src/tag/handlers/TagHandlerDice.ts":
/*!********************************************!*\
  !*** ./src/tag/handlers/TagHandlerDice.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TagHandlerDice": () => (/* binding */ TagHandlerDice)
/* harmony export */ });
var TagHandlerDice = /** @class */ (function () {
    function TagHandlerDice() {
        this.tagName = 'dice';
        this.tagAliases = [];
    }
    TagHandlerDice.prototype.handle = function (tagLabel, arg, content) {
        if (content.match(/^((\d+)|(\d*d\d+))(\+((\d+)|(\d*d\d+)))*$/)) {
            return "<div class=\"dice\">\u5047\u88C5\u6709\u9AB0\u5A18\uFF1A" + content + "=" + Math.round(Math.random() * 200) + "</div>";
        }
        return false;
    };
    return TagHandlerDice;
}());



/***/ }),

/***/ "./src/tag/handlers/TagHandlerItalic.ts":
/*!**********************************************!*\
  !*** ./src/tag/handlers/TagHandlerItalic.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TagHandlerItalic": () => (/* binding */ TagHandlerItalic)
/* harmony export */ });
var TagHandlerItalic = /** @class */ (function () {
    function TagHandlerItalic() {
        this.tagName = 'i';
        this.tagAliases = [];
    }
    TagHandlerItalic.prototype.handle = function (tagLabel, arg, content) {
        return "<" + this.tagName + ">" + content + "</" + this.tagName + ">";
    };
    return TagHandlerItalic;
}());



/***/ }),

/***/ "./src/tag/handlers/TagHandlerMask.ts":
/*!********************************************!*\
  !*** ./src/tag/handlers/TagHandlerMask.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TagHandlerMask": () => (/* binding */ TagHandlerMask)
/* harmony export */ });
var TagHandlerMask = /** @class */ (function () {
    function TagHandlerMask() {
        this.tagName = 'mask';
        this.tagAliases = [];
    }
    TagHandlerMask.prototype.handle = function (tagLabel, arg, content) {
        return "<div class=\"mask\">" + content + "</div>";
    };
    return TagHandlerMask;
}());



/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/* unused harmony export bbcode2html */
/* harmony import */ var _tag_handlers_TagHandlerBold__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tag/handlers/TagHandlerBold */ "./src/tag/handlers/TagHandlerBold.ts");
/* harmony import */ var _tag_handlers_TagHandlerItalic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tag/handlers/TagHandlerItalic */ "./src/tag/handlers/TagHandlerItalic.ts");
/* harmony import */ var _tag_handlers_TagHandlerColor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tag/handlers/TagHandlerColor */ "./src/tag/handlers/TagHandlerColor.ts");
/* harmony import */ var _tag_handlers_TagHandlerMask__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./tag/handlers/TagHandlerMask */ "./src/tag/handlers/TagHandlerMask.ts");
/* harmony import */ var _tag_handlers_TagHandlerCollapse__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./tag/handlers/TagHandlerCollapse */ "./src/tag/handlers/TagHandlerCollapse.ts");
/* harmony import */ var _tag_handlers_TagHandlerDice__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./tag/handlers/TagHandlerDice */ "./src/tag/handlers/TagHandlerDice.ts");






var STATE_NORMAL = 0;
var STATE_BBCODE_OPEN_START = 1;
var STATE_BBCODE_CLOSE_START = 2;
var TYPE_TEXT = 0;
var TYPE_BBCODE_OPEN = 1;
var TAG_HANDLER_MAP = {};
var TAG_ALIASES_MAP = {};
function transformAsIs(tagName, arg, content) {
    var openTag;
    if (arg) {
        openTag = tagName + "=" + arg;
    }
    else {
        openTag = tagName;
    }
    return "[" + openTag + "]" + content + "[/" + tagName + "]";
}
function transformTag(tagLabel, content, arg) {
    if (!content) {
        return '';
    }
    var tagName = TAG_ALIASES_MAP[tagLabel.substring(1).toLowerCase()];
    if (!tagName) {
        return transformAsIs(tagLabel, arg, content);
    }
    var handler = TAG_HANDLER_MAP[tagName];
    if (handler) {
        var result = handler.handle(tagName, arg, content);
        if (result) {
            return result;
        }
    }
    return transformAsIs(tagName, arg, content);
}
function filterXSS(str) {
    return str
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&#39;');
}
function registerTagHandler(handler) {
    TAG_HANDLER_MAP[handler.tagName] = handler;
    TAG_ALIASES_MAP[handler.tagName] = handler.tagName;
}
// TODO 自定义解析：标签内部嵌套的所有东西都交给自定义解析器，可以自行处理内容解析。用途：[code][/code]、[list][*]xx[/list]
// TODO 特殊解析：[code]标签应该忽略正常的闭合标签，直到找到了[/code]或者到达字符串末尾
function bbcode2html(rawContent) {
    rawContent = rawContent.replace(/ /g, '&nbsp;');
    // TODO any改接口
    var stack = [];
    var state = STATE_NORMAL;
    var tmp = '';
    for (var idx = 0; idx < rawContent.length; idx++) {
        var char = rawContent[idx];
        switch (char) {
            case '[': {
                if (state === STATE_NORMAL && idx < rawContent.length) {
                    if (tmp.length > 0) {
                        stack.push({ type: TYPE_TEXT, value: tmp });
                        tmp = '';
                    }
                    tmp = '[';
                    if (rawContent[idx + 1] === '/') {
                        state = STATE_BBCODE_CLOSE_START;
                        idx++;
                    }
                    else {
                        state = STATE_BBCODE_OPEN_START;
                    }
                }
                else if (state === STATE_BBCODE_OPEN_START || state === STATE_BBCODE_CLOSE_START) {
                    if (tmp.length > 0) {
                        stack.push({ type: TYPE_TEXT, value: tmp });
                        tmp = '[';
                    }
                }
                else {
                    tmp += char;
                }
                break;
            }
            case ']': {
                if (state === STATE_BBCODE_OPEN_START) {
                    var arg = void 0;
                    var argIdx = tmp.indexOf('=');
                    if (argIdx > 0) {
                        arg = tmp.substring(argIdx + 1);
                        tmp = tmp.substring(0, argIdx);
                    }
                    stack.push({ type: TYPE_BBCODE_OPEN, value: tmp, arg: arg });
                    tmp = '';
                    state = STATE_NORMAL;
                }
                else if (state === STATE_BBCODE_CLOSE_START) {
                    var content = '';
                    var successClosed = false;
                    out: while (true) {
                        var node_1 = stack.pop();
                        if (!node_1) {
                            break;
                        }
                        switch (node_1.type) {
                            case TYPE_TEXT: {
                                content = node_1.value + content;
                                break;
                            }
                            case TYPE_BBCODE_OPEN: {
                                if (node_1.value === tmp) {
                                    stack.push({ type: TYPE_TEXT, value: transformTag(node_1.value, content, node_1.arg) });
                                    content = '';
                                    successClosed = true;
                                    break out;
                                }
                                else {
                                    content = transformTag(node_1.value, content, node_1.arg);
                                }
                            }
                        }
                    }
                    if (!successClosed) {
                        content += '[/' + tmp.substring(1) + ']';
                    }
                    if (content.length > 0) {
                        stack.push({ type: TYPE_TEXT, value: content });
                    }
                    tmp = '';
                    state = STATE_NORMAL;
                }
                else {
                    tmp += char;
                }
                break;
            }
            case "\n": {
                tmp += '<br/>';
                break;
            }
            default: {
                tmp += char;
            }
        }
    }
    var result = '';
    var node;
    while (node = stack.pop()) {
        if (node.type === TYPE_BBCODE_OPEN) {
            if (tmp.length > 0) {
                result += tmp;
                tmp = '';
            }
            result = transformTag(node.value, result, node.arg);
        }
        else if (node.type === TYPE_TEXT) {
            result = node.value + result;
        }
    }
    if (tmp.length > 0) {
        result += tmp;
    }
    return result;
}
registerTagHandler(new _tag_handlers_TagHandlerBold__WEBPACK_IMPORTED_MODULE_0__.TagHandlerBold());
registerTagHandler(new _tag_handlers_TagHandlerItalic__WEBPACK_IMPORTED_MODULE_1__.TagHandlerItalic());
registerTagHandler(new _tag_handlers_TagHandlerColor__WEBPACK_IMPORTED_MODULE_2__.TagHandlerColor());
registerTagHandler(new _tag_handlers_TagHandlerMask__WEBPACK_IMPORTED_MODULE_3__.TagHandlerMask());
registerTagHandler(new _tag_handlers_TagHandlerCollapse__WEBPACK_IMPORTED_MODULE_4__.TagHandlerCollapse());
registerTagHandler(new _tag_handlers_TagHandlerDice__WEBPACK_IMPORTED_MODULE_5__.TagHandlerDice());
__webpack_require__.g.bbcode2html = bbcode2html;


})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9iYmNvZGUtcGFyc2VyLy4vc3JjL3RhZy9oYW5kbGVycy9UYWdIYW5kbGVyQm9sZC50cyIsIndlYnBhY2s6Ly9iYmNvZGUtcGFyc2VyLy4vc3JjL3RhZy9oYW5kbGVycy9UYWdIYW5kbGVyQ29sbGFwc2UudHMiLCJ3ZWJwYWNrOi8vYmJjb2RlLXBhcnNlci8uL3NyYy90YWcvaGFuZGxlcnMvVGFnSGFuZGxlckNvbG9yLnRzIiwid2VicGFjazovL2JiY29kZS1wYXJzZXIvLi9zcmMvdGFnL2hhbmRsZXJzL1RhZ0hhbmRsZXJEaWNlLnRzIiwid2VicGFjazovL2JiY29kZS1wYXJzZXIvLi9zcmMvdGFnL2hhbmRsZXJzL1RhZ0hhbmRsZXJJdGFsaWMudHMiLCJ3ZWJwYWNrOi8vYmJjb2RlLXBhcnNlci8uL3NyYy90YWcvaGFuZGxlcnMvVGFnSGFuZGxlck1hc2sudHMiLCJ3ZWJwYWNrOi8vYmJjb2RlLXBhcnNlci93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9iYmNvZGUtcGFyc2VyL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9iYmNvZGUtcGFyc2VyL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vYmJjb2RlLXBhcnNlci93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2JiY29kZS1wYXJzZXIvLi9zcmMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUVBO0lBQUE7UUFDYSxZQUFPLEdBQVcsR0FBRyxDQUFDO1FBQ3RCLGVBQVUsR0FBYSxFQUFFLENBQUM7SUFLdkMsQ0FBQztJQUhHLCtCQUFNLEdBQU4sVUFBTyxRQUFnQixFQUFFLEdBQVcsRUFBRSxPQUFlO1FBQ2pELE9BQU8sTUFBSSxJQUFJLENBQUMsT0FBTyxTQUFJLE9BQU8sVUFBSyxJQUFJLENBQUMsT0FBTyxNQUFHLENBQUM7SUFDM0QsQ0FBQztJQUNMLHFCQUFDO0FBQUQsQ0FBQztBQUV5Qjs7Ozs7Ozs7Ozs7Ozs7QUNUMUI7SUFBQTtRQUNhLFlBQU8sR0FBVyxVQUFVLENBQUM7UUFDN0IsZUFBVSxHQUFhLEVBQUUsQ0FBQztJQVF2QyxDQUFDO0lBTkcsbUNBQU0sR0FBTixVQUFPLFFBQWdCLEVBQUUsR0FBVyxFQUFFLE9BQWU7UUFDakQsSUFBSSxDQUFDLEdBQUcsRUFBRTtZQUNOLEdBQUcsR0FBRyxNQUFNO1NBQ2Y7UUFDRCxPQUFPLHVCQUFxQixHQUFHLGtCQUFhLE9BQU8sZUFBWSxDQUFDO0lBQ3BFLENBQUM7SUFDTCx5QkFBQztBQUFELENBQUM7QUFFNkI7Ozs7Ozs7Ozs7Ozs7O0FDWjlCO0lBQUE7UUFDYSxZQUFPLEdBQVcsT0FBTyxDQUFDO1FBQzFCLGVBQVUsR0FBYSxFQUFFLENBQUM7SUFXdkMsQ0FBQztJQVRHLGdDQUFNLEdBQU4sVUFBTyxRQUFnQixFQUFFLEdBQVcsRUFBRSxPQUFlO1FBQ2pELElBQUksQ0FBQyxHQUFHLEVBQUU7WUFDTixPQUFPLE9BQU8sQ0FBQztTQUNsQjtRQUNELElBQUksR0FBRyxDQUFDLEtBQUssQ0FBQyxrQkFBa0IsQ0FBQyxFQUFFO1lBQy9CLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxDQUFDO1NBQ25CO1FBQ0QsT0FBTyx5QkFBc0IsR0FBRyxXQUFLLE9BQU8sWUFBUyxDQUFDO0lBQzFELENBQUM7SUFDTCxzQkFBQztBQUFELENBQUM7QUFFMEI7Ozs7Ozs7Ozs7Ozs7O0FDZjNCO0lBQUE7UUFDYSxZQUFPLEdBQVcsTUFBTSxDQUFDO1FBQ3pCLGVBQVUsR0FBYSxFQUFFLENBQUM7SUFRdkMsQ0FBQztJQU5HLCtCQUFNLEdBQU4sVUFBTyxRQUFnQixFQUFFLEdBQVcsRUFBRSxPQUFlO1FBQ2pELElBQUksT0FBTyxDQUFDLEtBQUssQ0FBQywyQ0FBMkMsQ0FBQyxFQUFFO1lBQzVELE9BQU8sNkRBQTJCLE9BQU8sU0FBSSxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsR0FBRyxHQUFHLENBQUMsV0FBUSxDQUFDO1NBQ3hGO1FBQ0QsT0FBTyxLQUFLLENBQUM7SUFDakIsQ0FBQztJQUNMLHFCQUFDO0FBQUQsQ0FBQztBQUV5Qjs7Ozs7Ozs7Ozs7Ozs7QUNaMUI7SUFBQTtRQUNhLFlBQU8sR0FBVyxHQUFHLENBQUM7UUFDdEIsZUFBVSxHQUFhLEVBQUUsQ0FBQztJQUt2QyxDQUFDO0lBSEcsaUNBQU0sR0FBTixVQUFPLFFBQWdCLEVBQUUsR0FBVyxFQUFFLE9BQWU7UUFDakQsT0FBTyxNQUFJLElBQUksQ0FBQyxPQUFPLFNBQUksT0FBTyxVQUFLLElBQUksQ0FBQyxPQUFPLE1BQUcsQ0FBQztJQUMzRCxDQUFDO0lBQ0wsdUJBQUM7QUFBRCxDQUFDO0FBRTJCOzs7Ozs7Ozs7Ozs7OztBQ1Q1QjtJQUFBO1FBQ2EsWUFBTyxHQUFXLE1BQU0sQ0FBQztRQUN6QixlQUFVLEdBQWEsRUFBRSxDQUFDO0lBS3ZDLENBQUM7SUFIRywrQkFBTSxHQUFOLFVBQU8sUUFBZ0IsRUFBRSxHQUFXLEVBQUUsT0FBZTtRQUNqRCxPQUFPLHlCQUFxQixPQUFPLFdBQVEsQ0FBQztJQUNoRCxDQUFDO0lBQ0wscUJBQUM7QUFBRCxDQUFDO0FBRXlCOzs7Ozs7O1VDWDFCO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0Esd0NBQXdDLHlDQUF5QztXQUNqRjtXQUNBO1dBQ0EsRTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLEVBQUU7V0FDRjtXQUNBO1dBQ0EsQ0FBQyxJOzs7OztXQ1BELHdGOzs7Ozs7Ozs7Ozs7Ozs7OztBQ0MrRDtBQUNJO0FBQ0Y7QUFDRjtBQUNRO0FBQ1I7QUFJL0QsSUFBTSxZQUFZLEdBQUcsQ0FBQyxDQUFDO0FBQ3ZCLElBQU0sdUJBQXVCLEdBQUcsQ0FBQyxDQUFDO0FBQ2xDLElBQU0sd0JBQXdCLEdBQUcsQ0FBQyxDQUFDO0FBRW5DLElBQU0sU0FBUyxHQUFHLENBQUMsQ0FBQztBQUNwQixJQUFNLGdCQUFnQixHQUFHLENBQUMsQ0FBQztBQUUzQixJQUFNLGVBQWUsR0FBZ0MsRUFBRSxDQUFDO0FBQ3hELElBQU0sZUFBZSxHQUE0QixFQUFFLENBQUM7QUFFcEQsU0FBUyxhQUFhLENBQUMsT0FBZSxFQUFFLEdBQVcsRUFBRSxPQUFlO0lBQ2hFLElBQUksT0FBTyxDQUFDO0lBQ1osSUFBSSxHQUFHLEVBQUU7UUFDTCxPQUFPLEdBQU0sT0FBTyxTQUFJLEdBQUssQ0FBQztLQUNqQztTQUFNO1FBQ0gsT0FBTyxHQUFHLE9BQU8sQ0FBQztLQUNyQjtJQUNELE9BQU8sTUFBSSxPQUFPLFNBQUksT0FBTyxVQUFLLE9BQU8sTUFBRyxDQUFDO0FBQ2pELENBQUM7QUFFRCxTQUFTLFlBQVksQ0FBQyxRQUFnQixFQUFFLE9BQWUsRUFBRSxHQUFXO0lBQ2hFLElBQUksQ0FBQyxPQUFPLEVBQUU7UUFDVixPQUFPLEVBQUUsQ0FBQztLQUNiO0lBQ0QsSUFBTSxPQUFPLEdBQUcsZUFBZSxDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsV0FBVyxFQUFFLENBQUMsQ0FBQztJQUNyRSxJQUFJLENBQUMsT0FBTyxFQUFFO1FBQ1YsT0FBTyxhQUFhLENBQUMsUUFBUSxFQUFFLEdBQUcsRUFBRSxPQUFPLENBQUMsQ0FBQztLQUNoRDtJQUVELElBQU0sT0FBTyxHQUFHLGVBQWUsQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUN6QyxJQUFJLE9BQU8sRUFBRTtRQUNULElBQU0sTUFBTSxHQUFHLE9BQU8sQ0FBQyxNQUFNLENBQUMsT0FBTyxFQUFFLEdBQUcsRUFBRSxPQUFPLENBQUMsQ0FBQztRQUNyRCxJQUFJLE1BQU0sRUFBRTtZQUNSLE9BQU8sTUFBTSxDQUFDO1NBQ2pCO0tBQ0o7SUFDRCxPQUFPLGFBQWEsQ0FBQyxPQUFPLEVBQUUsR0FBRyxFQUFFLE9BQU8sQ0FBQyxDQUFDO0FBQ2hELENBQUM7QUFFRCxTQUFTLFNBQVMsQ0FBQyxHQUFXO0lBQzFCLE9BQU8sR0FBRztTQUNMLE9BQU8sQ0FBQyxJQUFJLEVBQUUsT0FBTyxDQUFDO1NBQ3RCLE9BQU8sQ0FBQyxJQUFJLEVBQUUsTUFBTSxDQUFDO1NBQ3JCLE9BQU8sQ0FBQyxJQUFJLEVBQUUsTUFBTSxDQUFDO1NBQ3JCLE9BQU8sQ0FBQyxJQUFJLEVBQUUsUUFBUSxDQUFDO1NBQ3ZCLE9BQU8sQ0FBQyxJQUFJLEVBQUUsT0FBTyxDQUFDLENBQUM7QUFDaEMsQ0FBQztBQUVELFNBQVMsa0JBQWtCLENBQUMsT0FBbUI7SUFDM0MsZUFBZSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsR0FBRyxPQUFPLENBQUM7SUFDM0MsZUFBZSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsR0FBRyxPQUFPLENBQUMsT0FBTyxDQUFDO0FBQ3ZELENBQUM7QUFFRCxpRkFBaUY7QUFDakYsc0RBQXNEO0FBQ3RELFNBQVMsV0FBVyxDQUFDLFVBQWtCO0lBQ25DLFVBQVUsR0FBRyxVQUFVLENBQUMsT0FBTyxDQUFDLElBQUksRUFBRSxRQUFRLENBQUMsQ0FBQztJQUVoRCxjQUFjO0lBQ2QsSUFBTSxLQUFLLEdBQVUsRUFBRSxDQUFDO0lBQ3hCLElBQUksS0FBSyxHQUFHLFlBQVksQ0FBQztJQUN6QixJQUFJLEdBQUcsR0FBRyxFQUFFLENBQUM7SUFDYixLQUFLLElBQUksR0FBRyxHQUFHLENBQUMsRUFBRSxHQUFHLEdBQUcsVUFBVSxDQUFDLE1BQU0sRUFBRSxHQUFHLEVBQUUsRUFBRTtRQUM5QyxJQUFNLElBQUksR0FBRyxVQUFVLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDN0IsUUFBUSxJQUFJLEVBQUU7WUFDVixLQUFLLEdBQUcsQ0FBQyxDQUFDO2dCQUNOLElBQUksS0FBSyxLQUFLLFlBQVksSUFBSSxHQUFHLEdBQUcsVUFBVSxDQUFDLE1BQU0sRUFBRTtvQkFDbkQsSUFBSSxHQUFHLENBQUMsTUFBTSxHQUFHLENBQUMsRUFBRTt3QkFDaEIsS0FBSyxDQUFDLElBQUksQ0FBQyxFQUFDLElBQUksRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLEdBQUcsRUFBQyxDQUFDLENBQUM7d0JBQzFDLEdBQUcsR0FBRyxFQUFFLENBQUM7cUJBQ1o7b0JBQ0QsR0FBRyxHQUFHLEdBQUcsQ0FBQztvQkFDVixJQUFJLFVBQVUsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxDQUFDLEtBQUssR0FBRyxFQUFFO3dCQUM3QixLQUFLLEdBQUcsd0JBQXdCLENBQUM7d0JBQ2pDLEdBQUcsRUFBRSxDQUFDO3FCQUNUO3lCQUFNO3dCQUNILEtBQUssR0FBRyx1QkFBdUIsQ0FBQztxQkFDbkM7aUJBQ0o7cUJBQU0sSUFBSSxLQUFLLEtBQUssdUJBQXVCLElBQUksS0FBSyxLQUFLLHdCQUF3QixFQUFFO29CQUNoRixJQUFJLEdBQUcsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUFFO3dCQUNoQixLQUFLLENBQUMsSUFBSSxDQUFDLEVBQUMsSUFBSSxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsR0FBRyxFQUFDLENBQUMsQ0FBQzt3QkFDMUMsR0FBRyxHQUFHLEdBQUcsQ0FBQztxQkFDYjtpQkFDSjtxQkFBTTtvQkFDSCxHQUFHLElBQUksSUFBSSxDQUFDO2lCQUNmO2dCQUNELE1BQU07YUFDVDtZQUNELEtBQUssR0FBRyxDQUFDLENBQUM7Z0JBQ04sSUFBSSxLQUFLLEtBQUssdUJBQXVCLEVBQUU7b0JBQ25DLElBQUksR0FBRyxVQUFDO29CQUNSLElBQU0sTUFBTSxHQUFHLEdBQUcsQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUM7b0JBQ2hDLElBQUksTUFBTSxHQUFHLENBQUMsRUFBRTt3QkFDWixHQUFHLEdBQUcsR0FBRyxDQUFDLFNBQVMsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUM7d0JBQ2hDLEdBQUcsR0FBRyxHQUFHLENBQUMsU0FBUyxDQUFDLENBQUMsRUFBRSxNQUFNLENBQUMsQ0FBQztxQkFDbEM7b0JBQ0QsS0FBSyxDQUFDLElBQUksQ0FBQyxFQUFDLElBQUksRUFBRSxnQkFBZ0IsRUFBRSxLQUFLLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUMsQ0FBQyxDQUFDO29CQUMzRCxHQUFHLEdBQUcsRUFBRSxDQUFDO29CQUNULEtBQUssR0FBRyxZQUFZLENBQUM7aUJBQ3hCO3FCQUFNLElBQUksS0FBSyxLQUFLLHdCQUF3QixFQUFFO29CQUMzQyxJQUFJLE9BQU8sR0FBRyxFQUFFLENBQUM7b0JBQ2pCLElBQUksYUFBYSxHQUFHLEtBQUssQ0FBQztvQkFDMUIsR0FBRyxFQUFFLE9BQU8sSUFBSSxFQUFFO3dCQUNkLElBQU0sTUFBSSxHQUFHLEtBQUssQ0FBQyxHQUFHLEVBQUUsQ0FBQzt3QkFDekIsSUFBSSxDQUFDLE1BQUksRUFBRTs0QkFDUCxNQUFNO3lCQUNUO3dCQUNELFFBQVEsTUFBSSxDQUFDLElBQUksRUFBRTs0QkFDZixLQUFLLFNBQVMsQ0FBQyxDQUFDO2dDQUNaLE9BQU8sR0FBRyxNQUFJLENBQUMsS0FBSyxHQUFHLE9BQU8sQ0FBQztnQ0FDL0IsTUFBTTs2QkFDVDs0QkFDRCxLQUFLLGdCQUFnQixDQUFDLENBQUM7Z0NBQ25CLElBQUksTUFBSSxDQUFDLEtBQUssS0FBSyxHQUFHLEVBQUU7b0NBQ3BCLEtBQUssQ0FBQyxJQUFJLENBQUMsRUFBQyxJQUFJLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxZQUFZLENBQUMsTUFBSSxDQUFDLEtBQUssRUFBRSxPQUFPLEVBQUUsTUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFDLENBQUMsQ0FBQztvQ0FDbEYsT0FBTyxHQUFHLEVBQUUsQ0FBQztvQ0FDYixhQUFhLEdBQUcsSUFBSSxDQUFDO29DQUNyQixNQUFNLEdBQUcsQ0FBQztpQ0FDYjtxQ0FBTTtvQ0FDSCxPQUFPLEdBQUcsWUFBWSxDQUFDLE1BQUksQ0FBQyxLQUFLLEVBQUUsT0FBTyxFQUFFLE1BQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztpQ0FDekQ7NkJBQ0o7eUJBQ0o7cUJBQ0o7b0JBQ0QsSUFBSSxDQUFDLGFBQWEsRUFBRTt3QkFDaEIsT0FBTyxJQUFJLElBQUksR0FBRyxHQUFHLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxHQUFHLEdBQUcsQ0FBQztxQkFDNUM7b0JBQ0QsSUFBSSxPQUFPLENBQUMsTUFBTSxHQUFHLENBQUMsRUFBRTt3QkFDcEIsS0FBSyxDQUFDLElBQUksQ0FBQyxFQUFDLElBQUksRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLE9BQU8sRUFBQyxDQUFDLENBQUM7cUJBQ2pEO29CQUNELEdBQUcsR0FBRyxFQUFFLENBQUM7b0JBQ1QsS0FBSyxHQUFHLFlBQVksQ0FBQztpQkFDeEI7cUJBQU07b0JBQ0gsR0FBRyxJQUFJLElBQUksQ0FBQztpQkFDZjtnQkFDRCxNQUFNO2FBQ1Q7WUFDRCxLQUFLLElBQUksQ0FBQyxDQUFDO2dCQUNQLEdBQUcsSUFBSSxPQUFPLENBQUM7Z0JBQ2YsTUFBTTthQUNUO1lBQ0QsT0FBTyxDQUFDLENBQUM7Z0JBQ0wsR0FBRyxJQUFJLElBQUksQ0FBQzthQUNmO1NBQ0o7S0FDSjtJQUNELElBQUksTUFBTSxHQUFHLEVBQUUsQ0FBQztJQUNoQixJQUFJLElBQUksQ0FBQztJQUNULE9BQU8sSUFBSSxHQUFHLEtBQUssQ0FBQyxHQUFHLEVBQUUsRUFBRTtRQUN2QixJQUFJLElBQUksQ0FBQyxJQUFJLEtBQUssZ0JBQWdCLEVBQUU7WUFDaEMsSUFBSSxHQUFHLENBQUMsTUFBTSxHQUFHLENBQUMsRUFBRTtnQkFDaEIsTUFBTSxJQUFJLEdBQUcsQ0FBQztnQkFDZCxHQUFHLEdBQUcsRUFBRSxDQUFDO2FBQ1o7WUFDRCxNQUFNLEdBQUcsWUFBWSxDQUFDLElBQUksQ0FBQyxLQUFLLEVBQUUsTUFBTSxFQUFFLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztTQUN2RDthQUFNLElBQUksSUFBSSxDQUFDLElBQUksS0FBSyxTQUFTLEVBQUU7WUFDaEMsTUFBTSxHQUFHLElBQUksQ0FBQyxLQUFLLEdBQUcsTUFBTSxDQUFDO1NBQ2hDO0tBQ0o7SUFDRCxJQUFJLEdBQUcsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUFFO1FBQ2hCLE1BQU0sSUFBSSxHQUFHLENBQUM7S0FDakI7SUFDRCxPQUFPLE1BQU0sQ0FBQztBQUNsQixDQUFDO0FBRUQsa0JBQWtCLENBQUMsSUFBSSx3RUFBYyxFQUFFLENBQUMsQ0FBQztBQUN6QyxrQkFBa0IsQ0FBQyxJQUFJLDRFQUFnQixFQUFFLENBQUMsQ0FBQztBQUMzQyxrQkFBa0IsQ0FBQyxJQUFJLDBFQUFlLEVBQUUsQ0FBQyxDQUFDO0FBQzFDLGtCQUFrQixDQUFDLElBQUksd0VBQWMsRUFBRSxDQUFDLENBQUM7QUFDekMsa0JBQWtCLENBQUMsSUFBSSxnRkFBa0IsRUFBRSxDQUFDLENBQUM7QUFDN0Msa0JBQWtCLENBQUMsSUFBSSx3RUFBYyxFQUFFLENBQUMsQ0FBQztBQUd6QyxxQkFBTSxDQUFDLFdBQVcsR0FBRyxXQUFXLENBQUM7QUFFWiIsImZpbGUiOiJidW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBUYWdIYW5kbGVyIH0gZnJvbSAnLi4vVGFnSGFuZGxlcic7XHJcblxyXG5jbGFzcyBUYWdIYW5kbGVyQm9sZCBpbXBsZW1lbnRzIFRhZ0hhbmRsZXIge1xyXG4gICAgcmVhZG9ubHkgdGFnTmFtZTogc3RyaW5nID0gJ2InO1xyXG4gICAgcmVhZG9ubHkgdGFnQWxpYXNlczogc3RyaW5nW10gPSBbXTtcclxuXHJcbiAgICBoYW5kbGUodGFnTGFiZWw6IHN0cmluZywgYXJnOiBzdHJpbmcsIGNvbnRlbnQ6IHN0cmluZyk6IHN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuIGA8JHt0aGlzLnRhZ05hbWV9PiR7Y29udGVudH08LyR7dGhpcy50YWdOYW1lfT5gO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgeyBUYWdIYW5kbGVyQm9sZCB9O1xyXG4iLCJpbXBvcnQgeyBUYWdIYW5kbGVyIH0gZnJvbSAnLi4vVGFnSGFuZGxlcic7XHJcblxyXG5jbGFzcyBUYWdIYW5kbGVyQ29sbGFwc2UgaW1wbGVtZW50cyBUYWdIYW5kbGVyIHtcclxuICAgIHJlYWRvbmx5IHRhZ05hbWU6IHN0cmluZyA9ICdjb2xsYXBzZSc7XHJcbiAgICByZWFkb25seSB0YWdBbGlhc2VzOiBzdHJpbmdbXSA9IFtdO1xyXG5cclxuICAgIGhhbmRsZSh0YWdMYWJlbDogc3RyaW5nLCBhcmc6IHN0cmluZywgY29udGVudDogc3RyaW5nKTogc3RyaW5nIHtcclxuICAgICAgICBpZiAoIWFyZykge1xyXG4gICAgICAgICAgICBhcmcgPSBcIueCueWHu+WxleW8gFwiXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBgPGRldGFpbHM+PHN1bW1hcnk+JHthcmd9PC9zdW1tYXJ5PiR7Y29udGVudH08L2RldGFpbHM+YDtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IHsgVGFnSGFuZGxlckNvbGxhcHNlIH07XHJcbiIsImltcG9ydCB7IFRhZ0hhbmRsZXIgfSBmcm9tICcuLi9UYWdIYW5kbGVyJztcclxuXHJcbmNsYXNzIFRhZ0hhbmRsZXJDb2xvciBpbXBsZW1lbnRzIFRhZ0hhbmRsZXIge1xyXG4gICAgcmVhZG9ubHkgdGFnTmFtZTogc3RyaW5nID0gJ2NvbG9yJztcclxuICAgIHJlYWRvbmx5IHRhZ0FsaWFzZXM6IHN0cmluZ1tdID0gW107XHJcblxyXG4gICAgaGFuZGxlKHRhZ0xhYmVsOiBzdHJpbmcsIGFyZzogc3RyaW5nLCBjb250ZW50OiBzdHJpbmcpOiBzdHJpbmcge1xyXG4gICAgICAgIGlmICghYXJnKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBjb250ZW50O1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoYXJnLm1hdGNoKC9eWzAtOWEtZkEtRl17Nn0kLykpIHtcclxuICAgICAgICAgICAgYXJnID0gJyMnICsgYXJnO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gYDxzcGFuIHN0eWxlPVwiY29sb3I6JHthcmd9XCI+JHtjb250ZW50fTwvc3Bhbj5gO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgeyBUYWdIYW5kbGVyQ29sb3IgfTtcclxuXHJcbiIsImltcG9ydCB7IFRhZ0hhbmRsZXIgfSBmcm9tICcuLi9UYWdIYW5kbGVyJztcclxuXHJcbmNsYXNzIFRhZ0hhbmRsZXJEaWNlIGltcGxlbWVudHMgVGFnSGFuZGxlciB7XHJcbiAgICByZWFkb25seSB0YWdOYW1lOiBzdHJpbmcgPSAnZGljZSc7XHJcbiAgICByZWFkb25seSB0YWdBbGlhc2VzOiBzdHJpbmdbXSA9IFtdO1xyXG5cclxuICAgIGhhbmRsZSh0YWdMYWJlbDogc3RyaW5nLCBhcmc6IHN0cmluZywgY29udGVudDogc3RyaW5nKTogc3RyaW5nfGZhbHNlIHtcclxuICAgICAgICBpZiAoY29udGVudC5tYXRjaCgvXigoXFxkKyl8KFxcZCpkXFxkKykpKFxcKygoXFxkKyl8KFxcZCpkXFxkKykpKSokLykpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGA8ZGl2IGNsYXNzPVwiZGljZVwiPuWBh+ijheaciemqsOWomO+8miR7Y29udGVudH09JHtNYXRoLnJvdW5kKE1hdGgucmFuZG9tKCkgKiAyMDApfTwvZGl2PmA7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IHsgVGFnSGFuZGxlckRpY2UgfTtcclxuIiwiaW1wb3J0IHsgVGFnSGFuZGxlciB9IGZyb20gJy4uL1RhZ0hhbmRsZXInO1xyXG5cclxuY2xhc3MgVGFnSGFuZGxlckl0YWxpYyBpbXBsZW1lbnRzIFRhZ0hhbmRsZXIge1xyXG4gICAgcmVhZG9ubHkgdGFnTmFtZTogc3RyaW5nID0gJ2knO1xyXG4gICAgcmVhZG9ubHkgdGFnQWxpYXNlczogc3RyaW5nW10gPSBbXTtcclxuXHJcbiAgICBoYW5kbGUodGFnTGFiZWw6IHN0cmluZywgYXJnOiBzdHJpbmcsIGNvbnRlbnQ6IHN0cmluZyk6IHN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuIGA8JHt0aGlzLnRhZ05hbWV9PiR7Y29udGVudH08LyR7dGhpcy50YWdOYW1lfT5gO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgeyBUYWdIYW5kbGVySXRhbGljIH07XHJcbiIsImltcG9ydCB7IFRhZ0hhbmRsZXIgfSBmcm9tICcuLi9UYWdIYW5kbGVyJztcclxuXHJcbmNsYXNzIFRhZ0hhbmRsZXJNYXNrIGltcGxlbWVudHMgVGFnSGFuZGxlciB7XHJcbiAgICByZWFkb25seSB0YWdOYW1lOiBzdHJpbmcgPSAnbWFzayc7XHJcbiAgICByZWFkb25seSB0YWdBbGlhc2VzOiBzdHJpbmdbXSA9IFtdO1xyXG5cclxuICAgIGhhbmRsZSh0YWdMYWJlbDogc3RyaW5nLCBhcmc6IHN0cmluZywgY29udGVudDogc3RyaW5nKTogc3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gYDxkaXYgY2xhc3M9XCJtYXNrXCI+JHtjb250ZW50fTwvZGl2PmA7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCB7IFRhZ0hhbmRsZXJNYXNrIH07XHJcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCJpbXBvcnQgeyBUYWdIYW5kbGVyIH0gZnJvbSAnLi90YWcvVGFnSGFuZGxlcic7XHJcbmltcG9ydCB7IFRhZ0hhbmRsZXJCb2xkIH0gZnJvbSAnLi90YWcvaGFuZGxlcnMvVGFnSGFuZGxlckJvbGQnO1xyXG5pbXBvcnQgeyBUYWdIYW5kbGVySXRhbGljIH0gZnJvbSAnLi90YWcvaGFuZGxlcnMvVGFnSGFuZGxlckl0YWxpYyc7XHJcbmltcG9ydCB7IFRhZ0hhbmRsZXJDb2xvciB9IGZyb20gJy4vdGFnL2hhbmRsZXJzL1RhZ0hhbmRsZXJDb2xvcic7XHJcbmltcG9ydCB7IFRhZ0hhbmRsZXJNYXNrIH0gZnJvbSAnLi90YWcvaGFuZGxlcnMvVGFnSGFuZGxlck1hc2snO1xyXG5pbXBvcnQgeyBUYWdIYW5kbGVyQ29sbGFwc2UgfSBmcm9tICcuL3RhZy9oYW5kbGVycy9UYWdIYW5kbGVyQ29sbGFwc2UnO1xyXG5pbXBvcnQgeyBUYWdIYW5kbGVyRGljZSB9IGZyb20gJy4vdGFnL2hhbmRsZXJzL1RhZ0hhbmRsZXJEaWNlJztcclxuXHJcbmRlY2xhcmUgdmFyIGdsb2JhbDphbnlcclxuXHJcbmNvbnN0IFNUQVRFX05PUk1BTCA9IDA7XHJcbmNvbnN0IFNUQVRFX0JCQ09ERV9PUEVOX1NUQVJUID0gMTtcclxuY29uc3QgU1RBVEVfQkJDT0RFX0NMT1NFX1NUQVJUID0gMjtcclxuXHJcbmNvbnN0IFRZUEVfVEVYVCA9IDA7XHJcbmNvbnN0IFRZUEVfQkJDT0RFX09QRU4gPSAxO1xyXG5cclxuY29uc3QgVEFHX0hBTkRMRVJfTUFQOiB7W2tleTogc3RyaW5nXTogVGFnSGFuZGxlcn0gPSB7fTtcclxuY29uc3QgVEFHX0FMSUFTRVNfTUFQOiB7W2tleTogc3RyaW5nXTogc3RyaW5nfSA9IHt9O1xyXG5cclxuZnVuY3Rpb24gdHJhbnNmb3JtQXNJcyh0YWdOYW1lOiBzdHJpbmcsIGFyZzogc3RyaW5nLCBjb250ZW50OiBzdHJpbmcpOiBzdHJpbmcge1xyXG4gICAgbGV0IG9wZW5UYWc7XHJcbiAgICBpZiAoYXJnKSB7XHJcbiAgICAgICAgb3BlblRhZyA9IGAke3RhZ05hbWV9PSR7YXJnfWA7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIG9wZW5UYWcgPSB0YWdOYW1lO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIGBbJHtvcGVuVGFnfV0ke2NvbnRlbnR9Wy8ke3RhZ05hbWV9XWA7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHRyYW5zZm9ybVRhZyh0YWdMYWJlbDogc3RyaW5nLCBjb250ZW50OiBzdHJpbmcsIGFyZzogc3RyaW5nKTogc3RyaW5nIHtcclxuICAgIGlmICghY29udGVudCkge1xyXG4gICAgICAgIHJldHVybiAnJztcclxuICAgIH1cclxuICAgIGNvbnN0IHRhZ05hbWUgPSBUQUdfQUxJQVNFU19NQVBbdGFnTGFiZWwuc3Vic3RyaW5nKDEpLnRvTG93ZXJDYXNlKCldO1xyXG4gICAgaWYgKCF0YWdOYW1lKSB7XHJcbiAgICAgICAgcmV0dXJuIHRyYW5zZm9ybUFzSXModGFnTGFiZWwsIGFyZywgY29udGVudCk7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgaGFuZGxlciA9IFRBR19IQU5ETEVSX01BUFt0YWdOYW1lXTtcclxuICAgIGlmIChoYW5kbGVyKSB7XHJcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gaGFuZGxlci5oYW5kbGUodGFnTmFtZSwgYXJnLCBjb250ZW50KTtcclxuICAgICAgICBpZiAocmVzdWx0KSB7XHJcbiAgICAgICAgICAgIHJldHVybiByZXN1bHQ7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIHRyYW5zZm9ybUFzSXModGFnTmFtZSwgYXJnLCBjb250ZW50KTtcclxufVxyXG5cclxuZnVuY3Rpb24gZmlsdGVyWFNTKHN0cjogc3RyaW5nKTogc3RyaW5nIHtcclxuICAgIHJldHVybiBzdHJcclxuICAgICAgICAucmVwbGFjZSgvJi9nLCAnJmFtcDsnKVxyXG4gICAgICAgIC5yZXBsYWNlKC88L2csICcmbHQ7JylcclxuICAgICAgICAucmVwbGFjZSgvPi9nLCAnJmd0OycpXHJcbiAgICAgICAgLnJlcGxhY2UoL1wiL2csICcmcXVvdDsnKVxyXG4gICAgICAgIC5yZXBsYWNlKC8nL2csICcmIzM5OycpO1xyXG59XHJcblxyXG5mdW5jdGlvbiByZWdpc3RlclRhZ0hhbmRsZXIoaGFuZGxlcjogVGFnSGFuZGxlcikge1xyXG4gICAgVEFHX0hBTkRMRVJfTUFQW2hhbmRsZXIudGFnTmFtZV0gPSBoYW5kbGVyO1xyXG4gICAgVEFHX0FMSUFTRVNfTUFQW2hhbmRsZXIudGFnTmFtZV0gPSBoYW5kbGVyLnRhZ05hbWU7XHJcbn1cclxuXHJcbi8vIFRPRE8g6Ieq5a6a5LmJ6Kej5p6Q77ya5qCH562+5YaF6YOo5bWM5aWX55qE5omA5pyJ5Lic6KW/6YO95Lqk57uZ6Ieq5a6a5LmJ6Kej5p6Q5Zmo77yM5Y+v5Lul6Ieq6KGM5aSE55CG5YaF5a656Kej5p6Q44CC55So6YCU77yaW2NvZGVdWy9jb2RlXeOAgVtsaXN0XVsqXXh4Wy9saXN0XVxyXG4vLyBUT0RPIOeJueauiuino+aekO+8mltjb2RlXeagh+etvuW6lOivpeW/veeVpeato+W4uOeahOmXreWQiOagh+etvu+8jOebtOWIsOaJvuWIsOS6hlsvY29kZV3miJbogIXliLDovr7lrZfnrKbkuLLmnKvlsL5cclxuZnVuY3Rpb24gYmJjb2RlMmh0bWwocmF3Q29udGVudDogc3RyaW5nKTogc3RyaW5nIHtcclxuICAgIHJhd0NvbnRlbnQgPSByYXdDb250ZW50LnJlcGxhY2UoLyAvZywgJyZuYnNwOycpO1xyXG5cclxuICAgIC8vIFRPRE8gYW555pS55o6l5Y+jXHJcbiAgICBjb25zdCBzdGFjazogYW55W10gPSBbXTtcclxuICAgIGxldCBzdGF0ZSA9IFNUQVRFX05PUk1BTDtcclxuICAgIGxldCB0bXAgPSAnJztcclxuICAgIGZvciAobGV0IGlkeCA9IDA7IGlkeCA8IHJhd0NvbnRlbnQubGVuZ3RoOyBpZHgrKykge1xyXG4gICAgICAgIGNvbnN0IGNoYXIgPSByYXdDb250ZW50W2lkeF07XHJcbiAgICAgICAgc3dpdGNoIChjaGFyKSB7XHJcbiAgICAgICAgICAgIGNhc2UgJ1snOiB7XHJcbiAgICAgICAgICAgICAgICBpZiAoc3RhdGUgPT09IFNUQVRFX05PUk1BTCAmJiBpZHggPCByYXdDb250ZW50Lmxlbmd0aCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0bXAubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzdGFjay5wdXNoKHt0eXBlOiBUWVBFX1RFWFQsIHZhbHVlOiB0bXB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdG1wID0gJyc7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIHRtcCA9ICdbJztcclxuICAgICAgICAgICAgICAgICAgICBpZiAocmF3Q29udGVudFtpZHggKyAxXSA9PT0gJy8nKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRlID0gU1RBVEVfQkJDT0RFX0NMT1NFX1NUQVJUO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZHgrKztcclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzdGF0ZSA9IFNUQVRFX0JCQ09ERV9PUEVOX1NUQVJUO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoc3RhdGUgPT09IFNUQVRFX0JCQ09ERV9PUEVOX1NUQVJUIHx8IHN0YXRlID09PSBTVEFURV9CQkNPREVfQ0xPU0VfU1RBUlQpIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAodG1wLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3RhY2sucHVzaCh7dHlwZTogVFlQRV9URVhULCB2YWx1ZTogdG1wfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRtcCA9ICdbJztcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHRtcCArPSBjaGFyO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY2FzZSAnXSc6IHtcclxuICAgICAgICAgICAgICAgIGlmIChzdGF0ZSA9PT0gU1RBVEVfQkJDT0RFX09QRU5fU1RBUlQpIHtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgYXJnO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGFyZ0lkeCA9IHRtcC5pbmRleE9mKCc9Jyk7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGFyZ0lkeCA+IDApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYXJnID0gdG1wLnN1YnN0cmluZyhhcmdJZHggKyAxKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdG1wID0gdG1wLnN1YnN0cmluZygwLCBhcmdJZHgpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBzdGFjay5wdXNoKHt0eXBlOiBUWVBFX0JCQ09ERV9PUEVOLCB2YWx1ZTogdG1wLCBhcmc6IGFyZ30pO1xyXG4gICAgICAgICAgICAgICAgICAgIHRtcCA9ICcnO1xyXG4gICAgICAgICAgICAgICAgICAgIHN0YXRlID0gU1RBVEVfTk9STUFMO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChzdGF0ZSA9PT0gU1RBVEVfQkJDT0RFX0NMT1NFX1NUQVJUKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IGNvbnRlbnQgPSAnJztcclxuICAgICAgICAgICAgICAgICAgICBsZXQgc3VjY2Vzc0Nsb3NlZCA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgIG91dDogd2hpbGUgKHRydWUpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3Qgbm9kZSA9IHN0YWNrLnBvcCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoIW5vZGUpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN3aXRjaCAobm9kZS50eXBlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlIFRZUEVfVEVYVDoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRlbnQgPSBub2RlLnZhbHVlICsgY29udGVudDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgVFlQRV9CQkNPREVfT1BFTjoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChub2RlLnZhbHVlID09PSB0bXApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhY2sucHVzaCh7dHlwZTogVFlQRV9URVhULCB2YWx1ZTogdHJhbnNmb3JtVGFnKG5vZGUudmFsdWUsIGNvbnRlbnQsIG5vZGUuYXJnKX0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50ID0gJyc7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN1Y2Nlc3NDbG9zZWQgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhayBvdXQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udGVudCA9IHRyYW5zZm9ybVRhZyhub2RlLnZhbHVlLCBjb250ZW50LCBub2RlLmFyZyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmICghc3VjY2Vzc0Nsb3NlZCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50ICs9ICdbLycgKyB0bXAuc3Vic3RyaW5nKDEpICsgJ10nO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAoY29udGVudC5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0YWNrLnB1c2goe3R5cGU6IFRZUEVfVEVYVCwgdmFsdWU6IGNvbnRlbnR9KTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgdG1wID0gJyc7XHJcbiAgICAgICAgICAgICAgICAgICAgc3RhdGUgPSBTVEFURV9OT1JNQUw7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHRtcCArPSBjaGFyO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY2FzZSBcIlxcblwiOiB7XHJcbiAgICAgICAgICAgICAgICB0bXAgKz0gJzxici8+JztcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6IHtcclxuICAgICAgICAgICAgICAgIHRtcCArPSBjaGFyO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgbGV0IHJlc3VsdCA9ICcnO1xyXG4gICAgbGV0IG5vZGU7XHJcbiAgICB3aGlsZSAobm9kZSA9IHN0YWNrLnBvcCgpKSB7XHJcbiAgICAgICAgaWYgKG5vZGUudHlwZSA9PT0gVFlQRV9CQkNPREVfT1BFTikge1xyXG4gICAgICAgICAgICBpZiAodG1wLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgICAgIHJlc3VsdCArPSB0bXA7XHJcbiAgICAgICAgICAgICAgICB0bXAgPSAnJztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXN1bHQgPSB0cmFuc2Zvcm1UYWcobm9kZS52YWx1ZSwgcmVzdWx0LCBub2RlLmFyZyk7XHJcbiAgICAgICAgfSBlbHNlIGlmIChub2RlLnR5cGUgPT09IFRZUEVfVEVYVCkge1xyXG4gICAgICAgICAgICByZXN1bHQgPSBub2RlLnZhbHVlICsgcmVzdWx0O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGlmICh0bXAubGVuZ3RoID4gMCkge1xyXG4gICAgICAgIHJlc3VsdCArPSB0bXA7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gcmVzdWx0O1xyXG59XHJcblxyXG5yZWdpc3RlclRhZ0hhbmRsZXIobmV3IFRhZ0hhbmRsZXJCb2xkKCkpO1xyXG5yZWdpc3RlclRhZ0hhbmRsZXIobmV3IFRhZ0hhbmRsZXJJdGFsaWMoKSk7XHJcbnJlZ2lzdGVyVGFnSGFuZGxlcihuZXcgVGFnSGFuZGxlckNvbG9yKCkpO1xyXG5yZWdpc3RlclRhZ0hhbmRsZXIobmV3IFRhZ0hhbmRsZXJNYXNrKCkpO1xyXG5yZWdpc3RlclRhZ0hhbmRsZXIobmV3IFRhZ0hhbmRsZXJDb2xsYXBzZSgpKTtcclxucmVnaXN0ZXJUYWdIYW5kbGVyKG5ldyBUYWdIYW5kbGVyRGljZSgpKTtcclxuXHJcblxyXG5nbG9iYWwuYmJjb2RlMmh0bWwgPSBiYmNvZGUyaHRtbDtcclxuXHJcbmV4cG9ydCB7YmJjb2RlMmh0bWx9O1xyXG4iXSwic291cmNlUm9vdCI6IiJ9