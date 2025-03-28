"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var index_1 = require("./platform/index");
function testSubscriptionSystem() {
    console.log('===== ТЕСТУВАННЯ СИСТЕМИ ПІДПИСОК =====\n');
    var website = new index_1.WebSite();
    var mobileApp = new index_1.MobileApp();
    var managerCall = new index_1.ManagerCall();
    console.log('\n----- Створення підписок через веб-сайт -----');
    var domesticWeb = website.createDomesticSubscription();
    console.log(domesticWeb.getInfo());
    console.log('\n----- Створення підписок через мобільний додаток -----');
    var educationalMobile = mobileApp.createEducationalSubscription();
    console.log(educationalMobile.getInfo());
    console.log('\n----- Створення підписок через дзвінок менеджеру -----');
    var premiumManager = managerCall.createPremiumSubscription();
    console.log(premiumManager.getInfo());
    console.log('\n----- Порівняння мінімальних періодів підписок -----');
    var subscriptions = [
        domesticWeb,
        educationalMobile,
        premiumManager
    ];
    subscriptions.sort(function (a, b) { return a.getMinimumPeriod() - b.getMinimumPeriod(); });
    console.log('Підписки в порядку збільшення мінімального періоду:');
    subscriptions.forEach(function (sub) {
        console.log("".concat(sub.getType(), ": ").concat(sub.getMinimumPeriod(), " \u043C\u0456\u0441\u044F\u0446\u0456\u0432"));
    });
    console.log('\n===== ТЕСТУВАННЯ ЗАВЕРШЕНО =====');
}
testSubscriptionSystem();
