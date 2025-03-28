import { Subscription } from "./Subsciption";



export class PremiumSubscription extends Subscription {
    constructor() {
        super(
            399, 
            6, 
            ['Усі канали', 'Спортивні канали', 'Кіно преміум', 'Ексклюзивний контент'],
            ['Перегляд на 5 пристроях', '4K якість', 'Офлайн перегляд', 'Без реклами']
        );
    }

    getType(): string {
        return 'Преміум';
    }
}

