import { IDevice } from './IDevice';

export interface ILaptop extends IDevice {
    getScreenSize(): number;
    getProcessor(): string;
    getRam(): number;
}

export class IProneLaptop implements ILaptop {
    constructor(private model: string) {}
    
    getBrand(): string {
        return 'IProne';
    }
    
    getModel(): string {
        return this.model;
    }
    
    getScreenSize(): number {
        return 13.3;
    }
    
    getProcessor(): string {
        return 'N1 Pro';
    }
    
    getRam(): number {
        return 16;
    }
    
    getSpecs(): string {
        return `Screen: ${this.getScreenSize()}", Processor: ${this.getProcessor()}, RAM: ${this.getRam()}GB`;
    }
    
    getInfo(): string {
        return `${this.getBrand()} ${this.getModel()} Laptop - ${this.getSpecs()}`;
    }
}

export class KiaomiLaptop implements ILaptop {
    constructor(private model: string) {}
    
    getBrand(): string {
        return 'Kiaomi';
    }
    
    getModel(): string {
        return this.model;
    }
    
    getScreenSize(): number {
        return 15.6;
    }
    
    getProcessor(): string {
        return 'Snapdragon 8 Gen 2';
    }
    
    getRam(): number {
        return 12;
    }
    
    getSpecs(): string {
        return `Screen: ${this.getScreenSize()}", Processor: ${this.getProcessor()}, RAM: ${this.getRam()}GB`;
    }
    
    getInfo(): string {
        return `${this.getBrand()} ${this.getModel()} Laptop - ${this.getSpecs()}`;
    }
}

export class BalaxyLaptop implements ILaptop {
    constructor(private model: string) {}
    
    getBrand(): string {
        return 'Balaxy';
    }
    
    getModel(): string {
        return this.model;
    }
    
    getScreenSize(): number {
        return 14.0;
    }
    
    getProcessor(): string {
        return 'Exynos 9';
    }
    
    getRam(): number {
        return 8;
    }
    
    getSpecs(): string {
        return `Screen: ${this.getScreenSize()}", Processor: ${this.getProcessor()}, RAM: ${this.getRam()}GB`;
    }
    
    getInfo(): string {
        return `${this.getBrand()} ${this.getModel()} Laptop - ${this.getSpecs()}`;
    }
}