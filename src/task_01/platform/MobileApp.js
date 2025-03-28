"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Domestic_1 = require("../subscription/Domestic");
var Educational_1 = require("../subscription/Educational");
var Premium_1 = require("../subscription/Premium");
var MobileApp = /** @class */ (function () {
    function MobileApp() {
    }
    MobileApp.prototype.createDomesticSubscription = function () {
        console.log('Оформлення домашньої підписки через мобільний додаток');
        console.log('Додатковий бонус: 7 днів безкоштовно!');
        return new Domestic_1.DomesticSubscription();
    };
    MobileApp.prototype.createEducationalSubscription = function () {
        console.log('Оформлення освітньої підписки через мобільний додаток');
        return new Educational_1.EducationalSubscription();
    };
    MobileApp.prototype.createPremiumSubscription = function () {
        console.log('Оформлення преміум підписки через мобільний додаток');
        return new Premium_1.PremiumSubscription();
    };
    MobileApp.prototype.getSource = function () {
        return 'Мобільний додаток';
    };
    return MobileApp;
}());
exports.default = MobileApp;
