"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BalaxySmartphone = exports.KiaomiSmartphone = exports.IPraneSmartphone = void 0;
var IPraneSmartphone = /** @class */ (function () {
    function IPraneSmartphone(model) {
        this.model = model;
    }
    IPraneSmartphone.prototype.getBrand = function () {
        return 'IProne';
    };
    IPraneSmartphone.prototype.getModel = function () {
        return this.model;
    };
    IPraneSmartphone.prototype.getScreenSize = function () {
        return 6.1;
    };
    IPraneSmartphone.prototype.getCamera = function () {
        return 'Triple 48MP';
    };
    IPraneSmartphone.prototype.getBatteryCapacity = function () {
        return 3900;
    };
    IPraneSmartphone.prototype.getSpecs = function () {
        return "Screen: ".concat(this.getScreenSize(), "\", Camera: ").concat(this.getCamera(), ", Battery: ").concat(this.getBatteryCapacity(), "mAh");
    };
    IPraneSmartphone.prototype.getInfo = function () {
        return "".concat(this.getBrand(), " ").concat(this.getModel(), " Smartphone - ").concat(this.getSpecs());
    };
    return IPraneSmartphone;
}());
exports.IPraneSmartphone = IPraneSmartphone;
var KiaomiSmartphone = /** @class */ (function () {
    function KiaomiSmartphone(model) {
        this.model = model;
    }
    KiaomiSmartphone.prototype.getBrand = function () {
        return 'Kiaomi';
    };
    KiaomiSmartphone.prototype.getModel = function () {
        return this.model;
    };
    KiaomiSmartphone.prototype.getScreenSize = function () {
        return 6.7;
    };
    KiaomiSmartphone.prototype.getCamera = function () {
        return 'Quad 108MP';
    };
    KiaomiSmartphone.prototype.getBatteryCapacity = function () {
        return 5000;
    };
    KiaomiSmartphone.prototype.getSpecs = function () {
        return "Screen: ".concat(this.getScreenSize(), "\", Camera: ").concat(this.getCamera(), ", Battery: ").concat(this.getBatteryCapacity(), "mAh");
    };
    KiaomiSmartphone.prototype.getInfo = function () {
        return "".concat(this.getBrand(), " ").concat(this.getModel(), " Smartphone - ").concat(this.getSpecs());
    };
    return KiaomiSmartphone;
}());
exports.KiaomiSmartphone = KiaomiSmartphone;
var BalaxySmartphone = /** @class */ (function () {
    function BalaxySmartphone(model) {
        this.model = model;
    }
    BalaxySmartphone.prototype.getBrand = function () {
        return 'Balaxy';
    };
    BalaxySmartphone.prototype.getModel = function () {
        return this.model;
    };
    BalaxySmartphone.prototype.getScreenSize = function () {
        return 6.8;
    };
    BalaxySmartphone.prototype.getCamera = function () {
        return 'Quad 200MP';
    };
    BalaxySmartphone.prototype.getBatteryCapacity = function () {
        return 5500;
    };
    BalaxySmartphone.prototype.getSpecs = function () {
        return "Screen: ".concat(this.getScreenSize(), "\", Camera: ").concat(this.getCamera(), ", Battery: ").concat(this.getBatteryCapacity(), "mAh");
    };
    BalaxySmartphone.prototype.getInfo = function () {
        return "".concat(this.getBrand(), " ").concat(this.getModel(), " Smartphone - ").concat(this.getSpecs());
    };
    return BalaxySmartphone;
}());
exports.BalaxySmartphone = BalaxySmartphone;
