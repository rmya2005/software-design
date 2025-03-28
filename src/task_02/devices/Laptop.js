"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BalaxyLaptop = exports.KiaomiLaptop = exports.IProneLaptop = void 0;
var IProneLaptop = /** @class */ (function () {
    function IProneLaptop(model) {
        this.model = model;
    }
    IProneLaptop.prototype.getBrand = function () {
        return 'IProne';
    };
    IProneLaptop.prototype.getModel = function () {
        return this.model;
    };
    IProneLaptop.prototype.getScreenSize = function () {
        return 13.3;
    };
    IProneLaptop.prototype.getProcessor = function () {
        return 'N1 Pro';
    };
    IProneLaptop.prototype.getRam = function () {
        return 16;
    };
    IProneLaptop.prototype.getSpecs = function () {
        return "Screen: ".concat(this.getScreenSize(), "\", Processor: ").concat(this.getProcessor(), ", RAM: ").concat(this.getRam(), "GB");
    };
    IProneLaptop.prototype.getInfo = function () {
        return "".concat(this.getBrand(), " ").concat(this.getModel(), " Laptop - ").concat(this.getSpecs());
    };
    return IProneLaptop;
}());
exports.IProneLaptop = IProneLaptop;
var KiaomiLaptop = /** @class */ (function () {
    function KiaomiLaptop(model) {
        this.model = model;
    }
    KiaomiLaptop.prototype.getBrand = function () {
        return 'Kiaomi';
    };
    KiaomiLaptop.prototype.getModel = function () {
        return this.model;
    };
    KiaomiLaptop.prototype.getScreenSize = function () {
        return 15.6;
    };
    KiaomiLaptop.prototype.getProcessor = function () {
        return 'Snapdragon 8 Gen 2';
    };
    KiaomiLaptop.prototype.getRam = function () {
        return 12;
    };
    KiaomiLaptop.prototype.getSpecs = function () {
        return "Screen: ".concat(this.getScreenSize(), "\", Processor: ").concat(this.getProcessor(), ", RAM: ").concat(this.getRam(), "GB");
    };
    KiaomiLaptop.prototype.getInfo = function () {
        return "".concat(this.getBrand(), " ").concat(this.getModel(), " Laptop - ").concat(this.getSpecs());
    };
    return KiaomiLaptop;
}());
exports.KiaomiLaptop = KiaomiLaptop;
var BalaxyLaptop = /** @class */ (function () {
    function BalaxyLaptop(model) {
        this.model = model;
    }
    BalaxyLaptop.prototype.getBrand = function () {
        return 'Balaxy';
    };
    BalaxyLaptop.prototype.getModel = function () {
        return this.model;
    };
    BalaxyLaptop.prototype.getScreenSize = function () {
        return 14.0;
    };
    BalaxyLaptop.prototype.getProcessor = function () {
        return 'Exynos 9';
    };
    BalaxyLaptop.prototype.getRam = function () {
        return 8;
    };
    BalaxyLaptop.prototype.getSpecs = function () {
        return "Screen: ".concat(this.getScreenSize(), "\", Processor: ").concat(this.getProcessor(), ", RAM: ").concat(this.getRam(), "GB");
    };
    BalaxyLaptop.prototype.getInfo = function () {
        return "".concat(this.getBrand(), " ").concat(this.getModel(), " Laptop - ").concat(this.getSpecs());
    };
    return BalaxyLaptop;
}());
exports.BalaxyLaptop = BalaxyLaptop;
