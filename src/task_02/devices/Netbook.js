"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BalaxyNetbook = exports.KiaomiNetbook = exports.IPraneNetbook = void 0;
var IPraneNetbook = /** @class */ (function () {
    function IPraneNetbook(model) {
        this.model = model;
    }
    IPraneNetbook.prototype.getBrand = function () { return 'IProne'; };
    IPraneNetbook.prototype.getModel = function () { return this.model; };
    IPraneNetbook.prototype.getWeight = function () { return 1.2; };
    IPraneNetbook.prototype.getBatteryLife = function () { return 12; };
    IPraneNetbook.prototype.getSpecs = function () {
        return "Weight: ".concat(this.getWeight(), "kg, Battery: ").concat(this.getBatteryLife(), " hours");
    };
    IPraneNetbook.prototype.getInfo = function () {
        return "".concat(this.getBrand(), " ").concat(this.getModel(), " Netbook - ").concat(this.getSpecs());
    };
    return IPraneNetbook;
}());
exports.IPraneNetbook = IPraneNetbook;
var KiaomiNetbook = /** @class */ (function () {
    function KiaomiNetbook(model) {
        this.model = model;
    }
    KiaomiNetbook.prototype.getBrand = function () { return 'Kiaomi'; };
    KiaomiNetbook.prototype.getModel = function () { return this.model; };
    KiaomiNetbook.prototype.getWeight = function () { return 1.0; };
    KiaomiNetbook.prototype.getBatteryLife = function () { return 10; };
    KiaomiNetbook.prototype.getSpecs = function () {
        return "Weight: ".concat(this.getWeight(), "kg, Battery: ").concat(this.getBatteryLife(), " hours");
    };
    KiaomiNetbook.prototype.getInfo = function () {
        return "".concat(this.getBrand(), " ").concat(this.getModel(), " Netbook - ").concat(this.getSpecs());
    };
    return KiaomiNetbook;
}());
exports.KiaomiNetbook = KiaomiNetbook;
var BalaxyNetbook = /** @class */ (function () {
    function BalaxyNetbook(model) {
        this.model = model;
    }
    BalaxyNetbook.prototype.getBrand = function () { return 'Balaxy'; };
    BalaxyNetbook.prototype.getModel = function () { return this.model; };
    BalaxyNetbook.prototype.getWeight = function () { return 1.3; };
    BalaxyNetbook.prototype.getBatteryLife = function () { return 8; };
    BalaxyNetbook.prototype.getSpecs = function () {
        return "Weight: ".concat(this.getWeight(), "kg, Battery: ").concat(this.getBatteryLife(), " hours");
    };
    BalaxyNetbook.prototype.getInfo = function () {
        return "".concat(this.getBrand(), " ").concat(this.getModel(), " Netbook - ").concat(this.getSpecs());
    };
    return BalaxyNetbook;
}());
exports.BalaxyNetbook = BalaxyNetbook;
