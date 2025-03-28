import { Subscription } from './subscription/Subsciption';
import { WebSite, MobileApp, ManagerCall } from './platform/index';

function testSubscriptionSystem() {
    console.log('===== ТЕСТУВАННЯ СИСТЕМИ ПІДПИСОК =====\n');
    
    const website = new WebSite();
    const mobileApp = new MobileApp();
    const managerCall = new ManagerCall();
    
    console.log('\n----- Створення підписок через веб-сайт -----');
    const domesticWeb = website.createDomesticSubscription();
    console.log(domesticWeb.getInfo());
    
    console.log('\n----- Створення підписок через мобільний додаток -----');
    const educationalMobile = mobileApp.createEducationalSubscription();
    console.log(educationalMobile.getInfo());
    
    console.log('\n----- Створення підписок через дзвінок менеджеру -----');
    const premiumManager = managerCall.createPremiumSubscription();
    console.log(premiumManager.getInfo());
    
    console.log('\n----- Порівняння мінімальних періодів підписок -----');
    const subscriptions: Subscription[] = [
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

testSubscriptionSystem();