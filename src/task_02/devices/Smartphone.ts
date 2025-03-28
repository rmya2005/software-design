import { IDevice } from './IDevice';

export interface ISmartphone extends IDevice {
    getScreenSize(): number;
    getCamera(): string;
    getBatteryCapacity(): number;
}

export class IPraneSmartphone implements ISmartphone {
    constructor(private model: string) {}
    
    getBrand(): string {
        return 'IProne';
    }
    
    getModel(): string {
        return this.model;
    }
    
    getScreenSize(): number {
        return 6.1;
    }
    
    getCamera(): string {
        return 'Triple 48MP';
    }
    
    getBatteryCapacity(): number {
        return 3900;
    }
    
    getSpecs(): string {
        return `Screen: ${this.getScreenSize()}", Camera: ${this.getCamera()}, Battery: ${this.getBatteryCapacity()}mAh`;
    }
    
    getInfo(): string {
        return `${this.getBrand()} ${this.getModel()} Smartphone - ${this.getSpecs()}`;
    }
}

export class KiaomiSmartphone implements ISmartphone {
    constructor(private model: string) {}
    
    getBrand(): string {
        return 'Kiaomi';
    }
    
    getModel(): string {
        return this.model;
    }
    
    getScreenSize(): number {
        return 6.7;
    }
    
    getCamera(): string {
        return 'Quad 108MP';
    }
    
    getBatteryCapacity(): number {
        return 5000;
    }
    
    getSpecs(): string {
        return `Screen: ${this.getScreenSize()}", Camera: ${this.getCamera()}, Battery: ${this.getBatteryCapacity()}mAh`;
    }
    
    getInfo(): string {
        return `${this.getBrand()} ${this.getModel()} Smartphone - ${this.getSpecs()}`;
    }
}

export class BalaxySmartphone implements ISmartphone {
    constructor(private model: string) {}
    
    getBrand(): string {
        return 'Balaxy';
    }
    
    getModel(): string {
        return this.model;
    }
    
    getScreenSize(): number {
        return 6.8;
    }
    
    getCamera(): string {
        return 'Quad 200MP';
    }
    
    getBatteryCapacity(): number {
        return 5500;
    }
    
    getSpecs(): string {
        return `Screen: ${this.getScreenSize()}", Camera: ${this.getCamera()}, Battery: ${this.getBatteryCapacity()}mAh`;
    }
    
    getInfo(): string {
        return `${this.getBrand()} ${this.getModel()} Smartphone - ${this.getSpecs()}`;
    }
}