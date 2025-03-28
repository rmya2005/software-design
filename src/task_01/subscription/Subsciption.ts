export abstract class Subscription{
    constructor(protected monthlyFee:number,protected minimumPeriod:number,protected channels:string[],protected features:string[]){}

    abstract getType():string;


    getMonthlyFee(): number {
        return this.monthlyFee;
    }

    getMinimumPeriod(): number {
        return this.minimumPeriod;
    }

    getChannels(): string[] {
        return this.channels;
    }

    getFeatures(): string[] {
        return this.features;
    }

    getInfo(): string {
        return `
            Тип підписки: ${this.getType()}
            Щомісячна плата: ${this.monthlyFee} грн
            Мінімальний період: ${this.minimumPeriod} місяців
            Канали: ${this.channels.join(', ')}
            Можливості: ${this.features.join(', ')}
        `;
    }

}