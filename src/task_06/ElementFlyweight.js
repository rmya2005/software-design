"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ElementFlyweight = void 0;
var ElementFlyweight = /** @class */ (function () {
    function ElementFlyweight(tagName, displayType, closingType) {
        this.tagName = tagName;
        this.displayType = displayType;
        this.closingType = closingType;
    }
    return ElementFlyweight;
}());
exports.ElementFlyweight = ElementFlyweight;
