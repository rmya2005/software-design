import { IDevice } from './IDevice';

export interface INetbook extends IDevice {
    getWeight(): number;
    getBatteryLife(): number;
}

export class IPraneNetbook implements INetbook {
    constructor(private model: string) {}
    
    getBrand(): string { return 'IProne'; }
    getModel(): string { return this.model; }
    getWeight(): number { return 1.2; }
    getBatteryLife(): number { return 12; }
    
    getSpecs(): string {
        return `Weight: ${this.getWeight()}kg, Battery: ${this.getBatteryLife()} hours`;
    }
    
    getInfo(): string {
        return `${this.getBrand()} ${this.getModel()} Netbook - ${this.getSpecs()}`;
    }
}

export class KiaomiNetbook implements INetbook {
    constructor(private model: string) {}
    
    getBrand(): string { return 'Kiaomi'; }
    getModel(): string { return this.model; }
    getWeight(): number { return 1.0; }
    getBatteryLife(): number { return 10; }
    
    getSpecs(): string {
        return `Weight: ${this.getWeight()}kg, Battery: ${this.getBatteryLife()} hours`;
    }
    
    getInfo(): string {
        return `${this.getBrand()} ${this.getModel()} Netbook - ${this.getSpecs()}`;
    }
}

export class BalaxyNetbook implements INetbook {
    constructor(private model: string) {}
    
    getBrand(): string { return 'Balaxy'; }
    getModel(): string { return this.model; }
    getWeight(): number { return 1.3; }
    getBatteryLife(): number { return 8; }
    
    getSpecs(): string {
        return `Weight: ${this.getWeight()}kg, Battery: ${this.getBatteryLife()} hours`;
    }
    
    getInfo(): string {
        return `${this.getBrand()} ${this.getModel()} Netbook - ${this.getSpecs()}`;
    }
}