"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Domestic_1 = require("../subscription/Domestic");
const Educational_1 = require("../subscription/Educational");
const Premium_1 = require("../subscription/Premium");
class MobileApp {
    createDomesticSubscription() {
        console.log('Оформлення домашньої підписки через мобільний додаток');
        console.log('Додатковий бонус: 7 днів безкоштовно!');
        return new Domestic_1.DomesticSubscription();
    }
    createEducationalSubscription() {
        console.log('Оформлення освітньої підписки через мобільний додаток');
        return new Educational_1.EducationalSubscription();
    }
    createPremiumSubscription() {
        console.log('Оформлення преміум підписки через мобільний додаток');
        return new Premium_1.PremiumSubscription();
    }
    getSource() {
        return 'Мобільний додаток';
    }
}
exports.default = MobileApp;
