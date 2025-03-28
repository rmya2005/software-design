"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DomesticSubscription = void 0;
const Subsciption_1 = require("./Subsciption");
class DomesticSubscription extends Subsciption_1.Subscription {
    constructor() {
        super(199, 1, ['Національні канали', 'Кухня+', 'Сімейний'], ['Перегляд на 2 пристроях', 'HD якість']);
    }
    getType() {
        return 'Домашня';
    }
}
exports.DomesticSubscription = DomesticSubscription;
