"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Shape = void 0;
var Shape = /** @class */ (function () {
    function Shape(renderer) {
        this.renderer = renderer;
    }
    // Можливість змінити рендерер під час виконання
    Shape.prototype.setRenderer = function (renderer) {
        this.renderer = renderer;
    };
    return Shape;
}());
exports.Shape = Shape;
