"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HeroDecorator = void 0;
var HeroDecorator = /** @class */ (function () {
    function HeroDecorator(hero) {
        this.hero = hero;
    }
    Object.defineProperty(HeroDecorator.prototype, "type", {
        get: function () {
            return this.hero.type;
        },
        enumerable: false,
        configurable: true
    });
    HeroDecorator.prototype.getAttack = function () {
        return this.hero.getAttack();
    };
    HeroDecorator.prototype.getDefense = function () {
        return this.hero.getDefense();
    };
    HeroDecorator.prototype.getMagic = function () {
        return this.hero.getMagic();
    };
    HeroDecorator.prototype.getDescription = function () {
        return this.hero.getDescription();
    };
    return HeroDecorator;
}());
exports.HeroDecorator = HeroDecorator;
