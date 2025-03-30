"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LightNode = void 0;
var LightNode = /** @class */ (function () {
    function LightNode() {
    }
    // Додаємо метод outerHTML як аліас для render()
    LightNode.prototype.outerHTML = function () {
        return this.render();
    };
    return LightNode;
}());
exports.LightNode = LightNode;
