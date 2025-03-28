import { DomesticSubscription } from "../subscription/Domestic";
import { EducationalSubscription } from "../subscription/Educational";
import { PremiumSubscription } from "../subscription/Premium";
import { Subscription } from "../subscription/Subsciption";
import { ISubscriptionCreator } from "./ISubscriptionCreator";


class ManagerCall implements ISubscriptionCreator {
    createDomesticSubscription(): Subscription {
        console.log('Оформлення домашньої підписки через менеджера');
        return new DomesticSubscription();
    }

    createEducationalSubscription(): Subscription {
        console.log('Оформлення освітньої підписки через менеджера');
        console.log('Додаткова можливість: розстрочка платежу');
        return new EducationalSubscription();
    }

    createPremiumSubscription(): Subscription {
        console.log('Оформлення преміум підписки через менеджера');
        console.log('Додатковий бонус: індивідуальне налаштування каналів');
        return new PremiumSubscription();
    }

    getSource(): string {
        return 'Дзвінок менеджеру';
    }
}

export default ManagerCall;