"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.KiaomiFactory = void 0;
var Laptop_1 = require("../devices/Laptop");
var Netbook_1 = require("../devices/Netbook");
var EBook_1 = require("../devices/EBook");
var Smartphone_1 = require("../devices/Smartphone");
var KiaomiFactory = /** @class */ (function () {
    function KiaomiFactory() {
    }
    KiaomiFactory.prototype.createLaptop = function (model) {
        return new Laptop_1.KiaomiLaptop(model);
    };
    KiaomiFactory.prototype.createNetbook = function (model) {
        return new Netbook_1.KiaomiNetbook(model);
    };
    KiaomiFactory.prototype.createEBook = function (model) {
        return new EBook_1.KiaomiEBook(model);
    };
    KiaomiFactory.prototype.createSmartphone = function (model) {
        return new Smartphone_1.KiaomiSmartphone(model);
    };
    return KiaomiFactory;
}());
exports.KiaomiFactory = KiaomiFactory;
