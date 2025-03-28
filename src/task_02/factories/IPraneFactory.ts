import { IDeviceFactory } from './DeviceFactory';
import { ILaptop, IProneLaptop } from '../devices/Laptop';
import { INetbook, IPraneNetbook } from '../devices/Netbook';
import { IEBook, IPraneEBook } from '../devices/EBook';
import { ISmartphone, IPraneSmartphone } from '../devices/Smartphone';

export class IPraneFactory implements IDeviceFactory {
    createLaptop(model: string): ILaptop {
        return new IProneLaptop(model);
    }
    
    createNetbook(model: string): INetbook {
        return new IPraneNetbook(model);
    }
    
    createEBook(model: string): IEBook {
        return new IPraneEBook(model);
    }
    
    createSmartphone(model: string): ISmartphone {
        return new IPraneSmartphone(model);
    }
}