import { Subscription } from "./Subsciption";


export class EducationalSubscription extends Subscription {
    constructor() {
        super(
            149, 
            3, 
            ['Discovery', 'History', 'National Geographic', 'Science+'],
            ['Перегляд на 1 пристрої', 'HD якість', 'Офлайн перегляд']
        );
    }

    getType(): string {
        return 'Освітня';
    }
}