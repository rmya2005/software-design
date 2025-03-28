import { IDeviceFactory } from './DeviceFactory';
import { ILaptop, KiaomiLaptop } from '../devices/Laptop';
import { INetbook, KiaomiNetbook } from '../devices/Netbook';
import { IEBook, KiaomiEBook } from '../devices/EBook';
import { ISmartphone, KiaomiSmartphone } from '../devices/Smartphone';

export class KiaomiFactory implements IDeviceFactory {
    createLaptop(model: string): ILaptop {
        return new KiaomiLaptop(model);
    }
    
    createNetbook(model: string): INetbook {
        return new KiaomiNetbook(model);
    }
    
    createEBook(model: string): IEBook {
        return new KiaomiEBook(model);
    }
    
    createSmartphone(model: string): ISmartphone {
        return new KiaomiSmartphone(model);
    }
}