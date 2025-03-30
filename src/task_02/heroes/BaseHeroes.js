"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Paladin = exports.Mage = exports.Warrior = void 0;
var Warrior = /** @class */ (function () {
    function Warrior() {
        this.type = "Warrior";
    }
    Warrior.prototype.getAttack = function () {
        return 10;
    };
    Warrior.prototype.getDefense = function () {
        return 8;
    };
    Warrior.prototype.getMagic = function () {
        return 2;
    };
    Warrior.prototype.getDescription = function () {
        return "Mighty Warrior";
    };
    return Warrior;
}());
exports.Warrior = Warrior;
var Mage = /** @class */ (function () {
    function Mage() {
        this.type = "Mage";
    }
    Mage.prototype.getAttack = function () {
        return 4;
    };
    Mage.prototype.getDefense = function () {
        return 3;
    };
    Mage.prototype.getMagic = function () {
        return 15;
    };
    Mage.prototype.getDescription = function () {
        return "Wise Mage";
    };
    return Mage;
}());
exports.Mage = Mage;
var Paladin = /** @class */ (function () {
    function Paladin() {
        this.type = "Paladin";
    }
    Paladin.prototype.getAttack = function () {
        return 8;
    };
    Paladin.prototype.getDefense = function () {
        return 10;
    };
    Paladin.prototype.getMagic = function () {
        return 6;
    };
    Paladin.prototype.getDescription = function () {
        return "Holy Paladin";
    };
    return Paladin;
}());
exports.Paladin = Paladin;
