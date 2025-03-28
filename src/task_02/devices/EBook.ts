import { IDevice } from './IDevice';

export interface IEBook extends IDevice {
    getScreenType(): string;
    getStorageCapacity(): number;
}

export class IPraneEBook implements IEBook {
    constructor(private model: string) {}
    
    getBrand(): string { return 'IProne'; }
    getModel(): string { return this.model; }
    getScreenType(): string { return 'E-Ink Carta'; }
    getStorageCapacity(): number { return 32; }
    
    getSpecs(): string {
        return `Screen: ${this.getScreenType()}, Storage: ${this.getStorageCapacity()}GB`;
    }
    
    getInfo(): string {
        return `${this.getBrand()} ${this.getModel()} EBook - ${this.getSpecs()}`;
    }
}

export class KiaomiEBook implements IEBook {
    constructor(private model: string) {}
    
    getBrand(): string { return 'Kiaomi'; }
    getModel(): string { return this.model; }
    getScreenType(): string { return 'E-Ink Pearl'; }
    getStorageCapacity(): number { return 16; }
    
    getSpecs(): string {
        return `Screen: ${this.getScreenType()}, Storage: ${this.getStorageCapacity()}GB`;
    }
    
    getInfo(): string {
        return `${this.getBrand()} ${this.getModel()} EBook - ${this.getSpecs()}`;
    }
}

export class BalaxyEBook implements IEBook {
    constructor(private model: string) {}
    
    getBrand(): string { return 'Balaxy'; }
    getModel(): string { return this.model; }
    getScreenType(): string { return 'E-Ink Mobius'; }
    getStorageCapacity(): number { return 64; }
    
    getSpecs(): string {
        return `Screen: ${this.getScreenType()}, Storage: ${this.getStorageCapacity()}GB`;
    }
    
    getInfo(): string {
        return `${this.getBrand()} ${this.getModel()} EBook - ${this.getSpecs()}`;
    }
}