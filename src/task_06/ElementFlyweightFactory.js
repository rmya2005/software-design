"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ElementFlyweightFactory = void 0;
var ElementFlyweight_1 = require("./ElementFlyweight");
var ElementFlyweightFactory = /** @class */ (function () {
    function ElementFlyweightFactory() {
        this.flyweights = new Map();
    }
    ElementFlyweightFactory.prototype.getFlyweight = function (tagName, displayType, closingType) {
        var key = "".concat(tagName, "_").concat(displayType, "_").concat(closingType);
        if (!this.flyweights.has(key)) {
            this.flyweights.set(key, new ElementFlyweight_1.ElementFlyweight(tagName, displayType, closingType));
        }
        return this.flyweights.get(key);
    };
    ElementFlyweightFactory.prototype.getFlyweightCount = function () {
        return this.flyweights.size;
    };
    return ElementFlyweightFactory;
}());
exports.ElementFlyweightFactory = ElementFlyweightFactory;
