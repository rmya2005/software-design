"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BalaxyEBook = exports.KiaomiEBook = exports.IPraneEBook = void 0;
var IPraneEBook = /** @class */ (function () {
    function IPraneEBook(model) {
        this.model = model;
    }
    IPraneEBook.prototype.getBrand = function () { return 'IProne'; };
    IPraneEBook.prototype.getModel = function () { return this.model; };
    IPraneEBook.prototype.getScreenType = function () { return 'E-Ink Carta'; };
    IPraneEBook.prototype.getStorageCapacity = function () { return 32; };
    IPraneEBook.prototype.getSpecs = function () {
        return "Screen: ".concat(this.getScreenType(), ", Storage: ").concat(this.getStorageCapacity(), "GB");
    };
    IPraneEBook.prototype.getInfo = function () {
        return "".concat(this.getBrand(), " ").concat(this.getModel(), " EBook - ").concat(this.getSpecs());
    };
    return IPraneEBook;
}());
exports.IPraneEBook = IPraneEBook;
var KiaomiEBook = /** @class */ (function () {
    function KiaomiEBook(model) {
        this.model = model;
    }
    KiaomiEBook.prototype.getBrand = function () { return 'Kiaomi'; };
    KiaomiEBook.prototype.getModel = function () { return this.model; };
    KiaomiEBook.prototype.getScreenType = function () { return 'E-Ink Pearl'; };
    KiaomiEBook.prototype.getStorageCapacity = function () { return 16; };
    KiaomiEBook.prototype.getSpecs = function () {
        return "Screen: ".concat(this.getScreenType(), ", Storage: ").concat(this.getStorageCapacity(), "GB");
    };
    KiaomiEBook.prototype.getInfo = function () {
        return "".concat(this.getBrand(), " ").concat(this.getModel(), " EBook - ").concat(this.getSpecs());
    };
    return KiaomiEBook;
}());
exports.KiaomiEBook = KiaomiEBook;
var BalaxyEBook = /** @class */ (function () {
    function BalaxyEBook(model) {
        this.model = model;
    }
    BalaxyEBook.prototype.getBrand = function () { return 'Balaxy'; };
    BalaxyEBook.prototype.getModel = function () { return this.model; };
    BalaxyEBook.prototype.getScreenType = function () { return 'E-Ink Mobius'; };
    BalaxyEBook.prototype.getStorageCapacity = function () { return 64; };
    BalaxyEBook.prototype.getSpecs = function () {
        return "Screen: ".concat(this.getScreenType(), ", Storage: ").concat(this.getStorageCapacity(), "GB");
    };
    BalaxyEBook.prototype.getInfo = function () {
        return "".concat(this.getBrand(), " ").concat(this.getModel(), " EBook - ").concat(this.getSpecs());
    };
    return BalaxyEBook;
}());
exports.BalaxyEBook = BalaxyEBook;
