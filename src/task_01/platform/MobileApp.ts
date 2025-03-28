import { DomesticSubscription } from "../subscription/Domestic";
import { EducationalSubscription } from "../subscription/Educational";
import { PremiumSubscription } from "../subscription/Premium";
import { Subscription } from "../subscription/Subsciption";
import { ISubscriptionCreator } from "./ISubscriptionCreator";

class MobileApp implements ISubscriptionCreator {
    createDomesticSubscription(): Subscription {
        console.log('Оформлення домашньої підписки через мобільний додаток');
        console.log('Додатковий бонус: 7 днів безкоштовно!');
        return new DomesticSubscription();
    }

    createEducationalSubscription(): Subscription {
        console.log('Оформлення освітньої підписки через мобільний додаток');
        return new EducationalSubscription();
    }

    createPremiumSubscription(): Subscription {
        console.log('Оформлення преміум підписки через мобільний додаток');
        return new PremiumSubscription();
    }

    getSource(): string {
        return 'Мобільний додаток';
    }
}


export default MobileApp;