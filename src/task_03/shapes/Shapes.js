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
exports.Triangle = exports.Square = exports.Circle = void 0;
var Shape_1 = require("./Shape");
var Circle = /** @class */ (function (_super) {
    __extends(Circle, _super);
    function Circle(renderer) {
        return _super.call(this, renderer) || this;
    }
    Circle.prototype.draw = function () {
        this.renderer.renderShape("Circle");
    };
    return Circle;
}(Shape_1.Shape));
exports.Circle = Circle;
var Square = /** @class */ (function (_super) {
    __extends(Square, _super);
    function Square(renderer) {
        return _super.call(this, renderer) || this;
    }
    Square.prototype.draw = function () {
        this.renderer.renderShape("Square");
    };
    return Square;
}(Shape_1.Shape));
exports.Square = Square;
var Triangle = /** @class */ (function (_super) {
    __extends(Triangle, _super);
    function Triangle(renderer) {
        return _super.call(this, renderer) || this;
    }
    Triangle.prototype.draw = function () {
        this.renderer.renderShape("Triangle");
    };
    return Triangle;
}(Shape_1.Shape));
exports.Triangle = Triangle;
