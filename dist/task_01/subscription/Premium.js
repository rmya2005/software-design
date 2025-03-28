"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PremiumSubscription = void 0;
const Subsciption_1 = require("./Subsciption");
class PremiumSubscription extends Subsciption_1.Subscription {
    constructor() {
        super(399, 6, ['Усі канали', 'Спортивні канали', 'Кіно преміум', 'Ексклюзивний контент'], ['Перегляд на 5 пристроях', '4K якість', 'Офлайн перегляд', 'Без реклами']);
    }
    getType() {
        return 'Преміум';
    }
}
exports.PremiumSubscription = PremiumSubscription;
