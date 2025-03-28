import { Subscription } from "../subscription/Subsciption"

export interface ISubscriptionCreator{
    createDomesticSubscription():Subscription;
    createEducationalSubscription(): Subscription;
    createPremiumSubscription(): Subscription;
    getSource(): string;

}