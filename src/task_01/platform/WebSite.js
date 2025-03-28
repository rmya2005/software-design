"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Domestic_1 = require("../subscription/Domestic");
var Educational_1 = require("../subscription/Educational");
var Premium_1 = require("../subscription/Premium");
var WebSite = /** @class */ (function () {
    function WebSite() {
    }
    WebSite.prototype.createDomesticSubscription = function () {
        console.log('Оформлення домашньої підписки через веб-сайт');
        return new Domestic_1.DomesticSubscription();
    };
    WebSite.prototype.createEducationalSubscription = function () {
        console.log('Оформлення навчальної через веб-сайт');
        return new Educational_1.EducationalSubscription();
    };
    WebSite.prototype.createPremiumSubscription = function () {
        console.log('Оформлення преміум через веб-сайт');
        return new Premium_1.PremiumSubscription();
    };
    WebSite.prototype.getSource = function () {
        return 'Веб-сайт';
    };
    return WebSite;
}());
exports.default = WebSite;
