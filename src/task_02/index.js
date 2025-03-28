"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var IPraneFactory_1 = require("./factories/IPraneFactory");
var KiaomiFactory_1 = require("./factories/KiaomiFactory");
var BalaxyFactory_1 = require("./factories/BalaxyFactory");
function testDeviceFactory() {
    console.log('===== ТЕСТУВАННЯ СИСТЕМИ ВИРОБНИЦТВА ТЕХНІКИ =====\n');
    var ipraneFactory = new IPraneFactory_1.IPraneFactory();
    var kiaomiFactory = new KiaomiFactory_1.KiaomiFactory();
    var balaxyFactory = new BalaxyFactory_1.BalaxyFactory();
    var devices = [
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
    devices.forEach(function (device, index) {
        console.log("".concat(index + 1, ". ").concat(device.getInfo()));
    });
    console.log('\n--- ЗГРУПОВАНІ ЗА БРЕНДАМИ ---');
    var groupedByBrand = {};
    devices.forEach(function (device) {
        var brand = device.getBrand();
        if (!groupedByBrand[brand]) {
            groupedByBrand[brand] = [];
        }
        groupedByBrand[brand].push(device);
    });
    for (var brand in groupedByBrand) {
        console.log("\n".concat(brand, " \u043F\u0440\u0438\u0441\u0442\u0440\u043E\u0457:"));
        groupedByBrand[brand].forEach(function (device) {
            console.log("- ".concat(device.getModel(), ": ").concat(device.getSpecs()));
        });
    }
    console.log('\n===== ТЕСТУВАННЯ ЗАВЕРШЕНО =====');
}
testDeviceFactory();
