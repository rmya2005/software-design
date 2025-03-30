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
exports.Gloves = exports.Ring = exports.Amulet = void 0;
var HeroDecorator_1 = require("./HeroDecorator");
var Amulet = /** @class */ (function (_super) {
    __extends(Amulet, _super);
    function Amulet(hero) {
        return _super.call(this, hero) || this;
    }
    Amulet.prototype.getMagic = function () {
        return this.hero.getMagic() + 5;
    };
    Amulet.prototype.getDescription = function () {
        return "".concat(this.hero.getDescription(), " with Mystical Amulet");
    };
    return Amulet;
}(HeroDecorator_1.HeroDecorator));
exports.Amulet = Amulet;
var Ring = /** @class */ (function (_super) {
    __extends(Ring, _super);
    function Ring(hero) {
        return _super.call(this, hero) || this;
    }
    Ring.prototype.getAttack = function () {
        return this.hero.getAttack() + 3;
    };
    Ring.prototype.getMagic = function () {
        return this.hero.getMagic() + 3;
    };
    Ring.prototype.getDescription = function () {
        return "".concat(this.hero.getDescription(), " wearing Ring of Power");
    };
    return Ring;
}(HeroDecorator_1.HeroDecorator));
exports.Ring = Ring;
var Gloves = /** @class */ (function (_super) {
    __extends(Gloves, _super);
    function Gloves(hero) {
        return _super.call(this, hero) || this;
    }
    Gloves.prototype.getAttack = function () {
        return this.hero.getAttack() + 2;
    };
    Gloves.prototype.getDefense = function () {
        return this.hero.getDefense() + 1;
    };
    Gloves.prototype.getDescription = function () {
        return "".concat(this.hero.getDescription(), " with Enchanted Gloves");
    };
    return Gloves;
}(HeroDecorator_1.HeroDecorator));
exports.Gloves = Gloves;
