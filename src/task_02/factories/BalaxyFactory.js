"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BalaxyFactory = void 0;
var Laptop_1 = require("../devices/Laptop");
var Netbook_1 = require("../devices/Netbook");
var EBook_1 = require("../devices/EBook");
var Smartphone_1 = require("../devices/Smartphone");
var BalaxyFactory = /** @class */ (function () {
    function BalaxyFactory() {
    }
    BalaxyFactory.prototype.createLaptop = function (model) {
        return new Laptop_1.BalaxyLaptop(model);
    };
    BalaxyFactory.prototype.createNetbook = function (model) {
        return new Netbook_1.BalaxyNetbook(model);
    };
    BalaxyFactory.prototype.createEBook = function (model) {
        return new EBook_1.BalaxyEBook(model);
    };
    BalaxyFactory.prototype.createSmartphone = function (model) {
        return new Smartphone_1.BalaxySmartphone(model);
    };
    return BalaxyFactory;
}());
exports.BalaxyFactory = BalaxyFactory;
