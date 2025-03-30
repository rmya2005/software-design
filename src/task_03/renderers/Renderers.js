"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RasterRenderer = exports.VectorRenderer = void 0;
var VectorRenderer = /** @class */ (function () {
    function VectorRenderer() {
    }
    VectorRenderer.prototype.renderShape = function (shapeName) {
        console.log("Drawing ".concat(shapeName, " as vector graphics"));
    };
    return VectorRenderer;
}());
exports.VectorRenderer = VectorRenderer;
var RasterRenderer = /** @class */ (function () {
    function RasterRenderer() {
    }
    RasterRenderer.prototype.renderShape = function (shapeName) {
        console.log("Drawing ".concat(shapeName, " as pixels"));
    };
    return RasterRenderer;
}());
exports.RasterRenderer = RasterRenderer;
