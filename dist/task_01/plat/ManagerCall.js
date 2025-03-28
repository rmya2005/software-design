"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Domestic_1 = require("../subscription/Domestic");
const Educational_1 = require("../subscription/Educational");
const Premium_1 = require("../subscription/Premium");
class ManagerCall {
    createDomesticSubscription() {
        console.log('Оформлення домашньої підписки через менеджера');
        return new Domestic_1.DomesticSubscription();
    }
    createEducationalSubscription() {
        console.log('Оформлення освітньої підписки через менеджера');
        console.log('Додаткова можливість: розстрочка платежу');
        return new Educational_1.EducationalSubscription();
    }
    createPremiumSubscription() {
        console.log('Оформлення преміум підписки через менеджера');
        console.log('Додатковий бонус: індивідуальне налаштування каналів');
        return new Premium_1.PremiumSubscription();
    }
    getSource() {
        return 'Дзвінок менеджеру';
    }
}
exports.default = ManagerCall;
