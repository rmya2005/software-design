"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IPraneFactory = void 0;
var Laptop_1 = require("../devices/Laptop");
var Netbook_1 = require("../devices/Netbook");
var EBook_1 = require("../devices/EBook");
var Smartphone_1 = require("../devices/Smartphone");
var IPraneFactory = /** @class */ (function () {
    function IPraneFactory() {
    }
    IPraneFactory.prototype.createLaptop = function (model) {
        return new Laptop_1.IProneLaptop(model);
    };
    IPraneFactory.prototype.createNetbook = function (model) {
        return new Netbook_1.IPraneNetbook(model);
    };
    IPraneFactory.prototype.createEBook = function (model) {
        return new EBook_1.IPraneEBook(model);
    };
    IPraneFactory.prototype.createSmartphone = function (model) {
        return new Smartphone_1.IPraneSmartphone(model);
    };
    return IPraneFactory;
}());
exports.IPraneFactory = IPraneFactory;
