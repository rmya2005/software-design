import { ILaptop } from '../devices/Laptop';
import { INetbook } from '../devices/Netbook';
import { IEBook } from '../devices/EBook';
import { ISmartphone } from '../devices/Smartphone';

export interface IDeviceFactory {
    createLaptop(model: string): ILaptop;
    createNetbook(model: string): INetbook;
    createEBook(model: string): IEBook;
    createSmartphone(model: string): ISmartphone;
}