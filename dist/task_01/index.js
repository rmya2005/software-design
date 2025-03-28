"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = require("./plat/index");
function testSubscriptionSystem() {
    console.log('===== ТЕСТУВАННЯ СИСТЕМИ ПІДПИСОК =====\n');
    // Створення підписок через різні джерела
    const website = new index_1.WebSite();
    const mobileApp = new index_1.MobileApp();
    const managerCall = new index_1.ManagerCall();
    console.log('\n----- Створення підписок через веб-сайт -----');
    const domesticWeb = website.createDomesticSubscription();
    console.log(domesticWeb.getInfo());
    console.log('\n----- Створення підписок через мобільний додаток -----');
    const educationalMobile = mobileApp.createEducationalSubscription();
    console.log(educationalMobile.getInfo());
    console.log('\n----- Створення підписок через дзвінок менеджеру -----');
    const premiumManager = managerCall.createPremiumSubscription();
    console.log(premiumManager.getInfo());
    // Демонстрація порівняння підписок
    console.log('\n----- Порівняння мінімальних періодів підписок -----');
    const subscriptions = [
        domesticWeb,
        educationalMobile,
        premiumManager
    ];
    subscriptions.sort((a, b) => a.getMinimumPeriod() - b.getMinimumPeriod());
    console.log('Підписки в порядку збільшення мінімального періоду:');
    subscriptions.forEach(sub => {
        console.log(`${sub.getType()}: ${sub.getMinimumPeriod()} місяців`);
    });
    console.log('\n===== ТЕСТУВАННЯ ЗАВЕРШЕНО =====');
}
// Запуск тестування
testSubscriptionSystem();
