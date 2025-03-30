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
exports.Shield = exports.MagicStaff = exports.Sword = void 0;
var HeroDecorator_1 = require("./HeroDecorator");
var Sword = /** @class */ (function (_super) {
    __extends(Sword, _super);
    function Sword(hero) {
        return _super.call(this, hero) || this;
    }
    Sword.prototype.getAttack = function () {
        return this.hero.getAttack() + 7;
    };
    Sword.prototype.getDescription = function () {
        return "".concat(this.hero.getDescription(), " wielding Sharp Sword");
    };
    return Sword;
}(HeroDecorator_1.HeroDecorator));
exports.Sword = Sword;
var MagicStaff = /** @class */ (function (_super) {
    __extends(MagicStaff, _super);
    function MagicStaff(hero) {
        return _super.call(this, hero) || this;
    }
    MagicStaff.prototype.getAttack = function () {
        return this.hero.getAttack() + 2;
    };
    MagicStaff.prototype.getMagic = function () {
        return this.hero.getMagic() + 8;
    };
    MagicStaff.prototype.getDescription = function () {
        return "".concat(this.hero.getDescription(), " with Arcane Staff");
    };
    return MagicStaff;
}(HeroDecorator_1.HeroDecorator));
exports.MagicStaff = MagicStaff;
var Shield = /** @class */ (function (_super) {
    __extends(Shield, _super);
    function Shield(hero) {
        return _super.call(this, hero) || this;
    }
    Shield.prototype.getAttack = function () {
        return this.hero.getAttack() - 1;
    };
    Shield.prototype.getDefense = function () {
        return this.hero.getDefense() + 6;
    };
    Shield.prototype.getDescription = function () {
        return "".concat(this.hero.getDescription(), " carrying Heavy Shield");
    };
    return Shield;
}(HeroDecorator_1.HeroDecorator));
exports.Shield = Shield;
