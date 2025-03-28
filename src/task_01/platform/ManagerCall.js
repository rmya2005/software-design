"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Domestic_1 = require("../subscription/Domestic");
var Educational_1 = require("../subscription/Educational");
var Premium_1 = require("../subscription/Premium");
var ManagerCall = /** @class */ (function () {
    function ManagerCall() {
    }
    ManagerCall.prototype.createDomesticSubscription = function () {
        console.log('Оформлення домашньої підписки через менеджера');
        return new Domestic_1.DomesticSubscription();
    };
    ManagerCall.prototype.createEducationalSubscription = function () {
        console.log('Оформлення освітньої підписки через менеджера');
        console.log('Додаткова можливість: розстрочка платежу');
        return new Educational_1.EducationalSubscription();
    };
    ManagerCall.prototype.createPremiumSubscription = function () {
        console.log('Оформлення преміум підписки через менеджера');
        console.log('Додатковий бонус: індивідуальне налаштування каналів');
        return new Premium_1.PremiumSubscription();
    };
    ManagerCall.prototype.getSource = function () {
        return 'Дзвінок менеджеру';
    };
    return ManagerCall;
}());
exports.default = ManagerCall;
