import { DomesticSubscription } from "../subscription/Domestic";
import { EducationalSubscription } from "../subscription/Educational";
import { PremiumSubscription } from "../subscription/Premium";
import { Subscription } from "../subscription/Subsciption";
import { ISubscriptionCreator } from "./ISubscriptionCreator";

class WebSite implements ISubscriptionCreator{
    createDomesticSubscription(): Subscription {
        console.log('Оформлення домашньої підписки через веб-сайт');
        return new DomesticSubscription();
        
    }
    createEducationalSubscription(): Subscription {
        console.log('Оформлення навчальної через веб-сайт');
        return new EducationalSubscription();
        
    }
    createPremiumSubscription(): Subscription {
        console.log('Оформлення преміум через веб-сайт');
        return new PremiumSubscription();
        
    }
    getSource(): string {
        return 'Веб-сайт';
    }
}

export default WebSite