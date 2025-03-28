"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Domestic_1 = require("../subscription/Domestic");
const Educational_1 = require("../subscription/Educational");
const Premium_1 = require("../subscription/Premium");
class WebSite {
    createDomesticSubscription() {
        console.log('Оформлення домашньої підписки через веб-сайт');
        return new Domestic_1.DomesticSubscription();
    }
    createEducationalSubscription() {
        console.log('Оформлення навчальної через веб-сайт');
        return new Educational_1.EducationalSubscription();
    }
    createPremiumSubscription() {
        console.log('Оформлення преміум через веб-сайт');
        return new Premium_1.PremiumSubscription();
    }
    getSource() {
        return 'Веб-сайт';
    }
}
exports.default = WebSite;
