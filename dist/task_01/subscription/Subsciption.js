"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Subscription = void 0;
class Subscription {
    constructor(monthlyFee, minimumPeriod, channels, features) {
        this.monthlyFee = monthlyFee;
        this.minimumPeriod = minimumPeriod;
        this.channels = channels;
        this.features = features;
    }
    getMonthlyFee() {
        return this.monthlyFee;
    }
    getMinimumPeriod() {
        return this.minimumPeriod;
    }
    getChannels() {
        return this.channels;
    }
    getFeatures() {
        return this.features;
    }
    getInfo() {
        return `
            Тип підписки: ${this.getType()}
            Щомісячна плата: ${this.monthlyFee} грн
            Мінімальний період: ${this.minimumPeriod} місяців
            Канали: ${this.channels.join(', ')}
            Можливості: ${this.features.join(', ')}
        `;
    }
}
exports.Subscription = Subscription;
