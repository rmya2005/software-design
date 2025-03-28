import { IDeviceFactory } from './factories/DeviceFactory';
import { IPraneFactory } from './factories/IPraneFactory';
import { KiaomiFactory } from './factories/KiaomiFactory';
import { BalaxyFactory } from './factories/BalaxyFactory';
import { IDevice } from './devices/IDevice';

function testDeviceFactory() {
    console.log('===== ТЕСТУВАННЯ СИСТЕМИ ВИРОБНИЦТВА ТЕХНІКИ =====\n');
    
    const ipraneFactory: IDeviceFactory = new IPraneFactory();
    const kiaomiFactory: IDeviceFactory = new KiaomiFactory();
    const balaxyFactory: IDeviceFactory = new BalaxyFactory();
    
    const devices: IDevice[] = [
        ipraneFactory.createLaptop('MacBook Pro'),
        ipraneFactory.createNetbook('AirBook Mini'),
        ipraneFactory.createEBook('BookReader'),
        ipraneFactory.createSmartphone('IProne 15'),
        
        kiaomiFactory.createLaptop('RedmiBook'),
        kiaomiFactory.createNetbook('Mi Book Air'),
        kiaomiFactory.createEBook('Mi Reader Pro'),
        kiaomiFactory.createSmartphone('Redmi Note 12'),
        
        balaxyFactory.createLaptop('Book Pro'),
        balaxyFactory.createNetbook('Chromebook'),
        balaxyFactory.createEBook('Reader Tab'),
        balaxyFactory.createSmartphone('S25 Ultra')
    ];
    
    console.log('--- СТВОРЕНІ ПРИСТРОЇ ---');
    devices.forEach((device, index) => {
        console.log(`${index + 1}. ${device.getInfo()}`);
    });
    
    console.log('\n--- ЗГРУПОВАНІ ЗА БРЕНДАМИ ---');
    const groupedByBrand: {[key: string]: IDevice[]} = {};
    
    devices.forEach(device => {
        const brand = device.getBrand();
        if (!groupedByBrand[brand]) {
            groupedByBrand[brand] = [];
        }
        groupedByBrand[brand].push(device);
    });
    
    for (const brand in groupedByBrand) {
        console.log(`\n${brand} пристрої:`);
        groupedByBrand[brand].forEach(device => {
            console.log(`- ${device.getModel()}: ${device.getSpecs()}`);
        });
    }
    
    console.log('\n===== ТЕСТУВАННЯ ЗАВЕРШЕНО =====');
}

testDeviceFactory();