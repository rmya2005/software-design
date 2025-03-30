"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.LightElementNode = exports.ClosingType = exports.DisplayType = void 0;
var LightNode_1 = require("./LightNode");
var DisplayType;
(function (DisplayType) {
    DisplayType["BLOCK"] = "block";
    DisplayType["INLINE"] = "inline";
})(DisplayType || (exports.DisplayType = DisplayType = {}));
var ClosingType;
(function (ClosingType) {
    ClosingType["SELF_CLOSING"] = "self-closing";
    ClosingType["WITH_CLOSING_TAG"] = "with-closing-tag";
})(ClosingType || (exports.ClosingType = ClosingType = {}));
var LightElementNode = /** @class */ (function (_super) {
    __extends(LightElementNode, _super);
    function LightElementNode(tagName, displayType, closingType) {
        if (displayType === void 0) { displayType = DisplayType.BLOCK; }
        if (closingType === void 0) { closingType = ClosingType.WITH_CLOSING_TAG; }
        var _this = _super.call(this) || this;
        _this.tagName = tagName;
        _this.displayType = displayType;
        _this.closingType = closingType;
        _this.cssClasses = [];
        _this.children = [];
        _this.attributes = new Map();
        return _this;
    }
    LightElementNode.prototype.addClass = function (cssClass) {
        if (!this.cssClasses.includes(cssClass)) {
            this.cssClasses.push(cssClass);
        }
    };
    LightElementNode.prototype.addChild = function (node) {
        this.children.push(node);
    };
    LightElementNode.prototype.setAttribute = function (name, value) {
        this.attributes.set(name, value);
    };
    LightElementNode.prototype.getChildCount = function () {
        var count = this.children.length;
        // Рекурсивно підрахуємо всіх нащадків
        for (var _i = 0, _a = this.children; _i < _a.length; _i++) {
            var child = _a[_i];
            count += child.getChildCount();
        }
        return count;
    };
    LightElementNode.prototype.innerHTML = function () {
        return this.children.map(function (child) { return child.render(); }).join('');
    };
    LightElementNode.prototype.render = function () {
        // Створюємо відкриваючий тег
        var result = "<".concat(this.tagName);
        // Додаємо атрибути
        this.attributes.forEach(function (value, name) {
            result += " ".concat(name, "=\"").concat(value, "\"");
        });
        // Додаємо CSS класи
        if (this.cssClasses.length > 0) {
            result += " class=\"".concat(this.cssClasses.join(' '), "\"");
        }
        if (this.closingType === ClosingType.SELF_CLOSING) {
            // Для елементів без закриваючого тега
            result += ' />';
            return result;
        }
        else {
            // Для елементів із закриваючим тегом
            result += '>';
            // Додаємо вміст
            result += this.innerHTML();
            // Додаємо закриваючий тег
            result += "</".concat(this.tagName, ">");
            return result;
        }
    };
    LightElementNode.prototype.outerHTML = function () {
        return this.render();
    };
    return LightElementNode;
}(LightNode_1.LightNode));
exports.LightElementNode = LightElementNode;
