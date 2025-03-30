"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LightHTML = void 0;
var LightTextNode_1 = require("./LightTextNode");
var LightElementNode_1 = require("./LightElementNode");
var LightHTML = /** @class */ (function () {
    function LightHTML() {
    }
    LightHTML.createText = function (text) {
        return new LightTextNode_1.LightTextNode(text);
    };
    LightHTML.createElement = function (tagName, displayType, closingType) {
        if (displayType === void 0) { displayType = LightElementNode_1.DisplayType.BLOCK; }
        if (closingType === void 0) { closingType = LightElementNode_1.ClosingType.WITH_CLOSING_TAG; }
        return new LightElementNode_1.LightElementNode(tagName, displayType, closingType);
    };
    return LightHTML;
}());
exports.LightHTML = LightHTML;
