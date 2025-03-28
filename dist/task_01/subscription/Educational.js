"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EducationalSubscription = void 0;
const Subsciption_1 = require("./Subsciption");
class EducationalSubscription extends Subsciption_1.Subscription {
    constructor() {
        super(149, 3, ['Discovery', 'History', 'National Geographic', 'Science+'], ['Перегляд на 1 пристрої', 'HD якість', 'Офлайн перегляд']);
    }
    getType() {
        return 'Освітня';
    }
}
exports.EducationalSubscription = EducationalSubscription;
