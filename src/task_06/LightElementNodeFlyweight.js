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
exports.LightElementNodeFlyweight = void 0;
var LightNode_1 = require("../task_05/LightNode");
var LightElementNode_1 = require("../task_05/LightElementNode");
var LightElementNodeFlyweight = /** @class */ (function (_super) {
    __extends(LightElementNodeFlyweight, _super);
    function LightElementNodeFlyweight(flyweight) {
        var _this = _super.call(this) || this;
        _this.flyweight = flyweight;
        _this.cssClasses = [];
        _this.children = [];
        _this.attributes = new Map();
        return _this;
    }
    LightElementNodeFlyweight.prototype.addClass = function (cssClass) {
        if (!this.cssClasses.includes(cssClass)) {
            this.cssClasses.push(cssClass);
        }
    };
    LightElementNodeFlyweight.prototype.addChild = function (node) {
        this.children.push(node);
    };
    LightElementNodeFlyweight.prototype.setAttribute = function (name, value) {
        this.attributes.set(name, value);
    };
    LightElementNodeFlyweight.prototype.getChildCount = function () {
        var count = this.children.length;
        for (var _i = 0, _a = this.children; _i < _a.length; _i++) {
            var child = _a[_i];
            count += child.getChildCount();
        }
        return count;
    };
    LightElementNodeFlyweight.prototype.innerHTML = function () {
        return this.children.map(function (child) { return child.render(); }).join('');
    };
    LightElementNodeFlyweight.prototype.render = function () {
        var result = "<".concat(this.flyweight.tagName);
        this.attributes.forEach(function (value, name) {
            result += " ".concat(name, "=\"").concat(value, "\"");
        });
        if (this.cssClasses.length > 0) {
            result += " class=\"".concat(this.cssClasses.join(' '), "\"");
        }
        if (this.flyweight.closingType === LightElementNode_1.ClosingType.SELF_CLOSING) {
            result += ' />';
            return result;
        }
        else {
            result += '>';
            result += this.innerHTML();
            result += "</".concat(this.flyweight.tagName, ">");
            return result;
        }
    };
    LightElementNodeFlyweight.prototype.outerHTML = function () {
        return this.render();
    };
    return LightElementNodeFlyweight;
}(LightNode_1.LightNode));
exports.LightElementNodeFlyweight = LightElementNodeFlyweight;
