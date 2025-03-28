import { IDeviceFactory } from './DeviceFactory';
import { ILaptop, BalaxyLaptop } from '../devices/Laptop';
import { INetbook, BalaxyNetbook } from '../devices/Netbook';
import { IEBook, BalaxyEBook } from '../devices/EBook';
import { ISmartphone, BalaxySmartphone } from '../devices/Smartphone';

export class BalaxyFactory implements IDeviceFactory {
    createLaptop(model: string): ILaptop {
        return new BalaxyLaptop(model);
    }
    
    createNetbook(model: string): INetbook {
        return new BalaxyNetbook(model);
    }
    
    createEBook(model: string): IEBook {
        return new BalaxyEBook(model);
    }
    
    createSmartphone(model: string): ISmartphone {
        return new BalaxySmartphone(model);
    }
}