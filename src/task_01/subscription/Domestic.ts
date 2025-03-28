import { Subscription } from "./Subsciption";

export class DomesticSubscription extends Subscription{
    constructor(){
        super(
            199, 
            1, 
            ['Національні канали', 'Кухня+', 'Сімейний'],
            ['Перегляд на 2 пристроях', 'HD якість']
        );
    }
    
    getType(): string {
        return 'Домашня';
    }
}