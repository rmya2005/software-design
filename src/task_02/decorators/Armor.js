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
exports.Boots = exports.ChestPlate = exports.Helmet = void 0;
var HeroDecorator_1 = require("./HeroDecorator");
var Helmet = /** @class */ (function (_super) {
    __extends(Helmet, _super);
    function Helmet(hero) {
        return _super.call(this, hero) || this;
    }
    Helmet.prototype.getDefense = function () {
        return this.hero.getDefense() + 3;
    };
    Helmet.prototype.getDescription = function () {
        return "".concat(this.hero.getDescription(), " with Steel Helmet");
    };
    return Helmet;
}(HeroDecorator_1.HeroDecorator));
exports.Helmet = Helmet;
var ChestPlate = /** @class */ (function (_super) {
    __extends(ChestPlate, _super);
    function ChestPlate(hero) {
        return _super.call(this, hero) || this;
    }
    ChestPlate.prototype.getDefense = function () {
        return this.hero.getDefense() + 5;
    };
    ChestPlate.prototype.getDescription = function () {
        return "".concat(this.hero.getDescription(), " wearing Iron Chestplate");
    };
    return ChestPlate;
}(HeroDecorator_1.HeroDecorator));
exports.ChestPlate = ChestPlate;
var Boots = /** @class */ (function (_super) {
    __extends(Boots, _super);
    function Boots(hero) {
        return _super.call(this, hero) || this;
    }
    Boots.prototype.getDefense = function () {
        return this.hero.getDefense() + 2;
    };
    Boots.prototype.getDescription = function () {
        return "".concat(this.hero.getDescription(), " with Leather Boots");
    };
    return Boots;
}(HeroDecorator_1.HeroDecorator));
exports.Boots = Boots;
