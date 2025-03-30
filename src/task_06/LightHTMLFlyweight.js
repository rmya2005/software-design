"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LightHTMLFlyweight = void 0;
var LightTextNode_1 = require("../task_05/LightTextNode");
var LightElementNode_1 = require("../task_05/LightElementNode");
var ElementFlyweightFactory_1 = require("./ElementFlyweightFactory");
var LightElementNodeFlyweight_1 = require("./LightElementNodeFlyweight");
var LightHTMLFlyweight = /** @class */ (function () {
    function LightHTMLFlyweight() {
    }
    LightHTMLFlyweight.createText = function (text) {
        return new LightTextNode_1.LightTextNode(text);
    };
    LightHTMLFlyweight.createElement = function (tagName, displayType, closingType) {
        if (displayType === void 0) { displayType = LightElementNode_1.DisplayType.BLOCK; }
        if (closingType === void 0) { closingType = LightElementNode_1.ClosingType.WITH_CLOSING_TAG; }
        var flyweight = this.factory.getFlyweight(tagName, displayType, closingType);
        return new LightElementNodeFlyweight_1.LightElementNodeFlyweight(flyweight);
    };
    LightHTMLFlyweight.getFlyweightCount = function () {
        return this.factory.getFlyweightCount();
    };
    LightHTMLFlyweight.factory = new ElementFlyweightFactory_1.ElementFlyweightFactory();
    return LightHTMLFlyweight;
}());
exports.LightHTMLFlyweight = LightHTMLFlyweight;
