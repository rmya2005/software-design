"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Authenticator_1 = require("./Authenticator");
var ExtendedAuthenticator_1 = require("./ExtendedAuthenticator");
function testSingleton() {
    console.log('===== ТЕСТУВАННЯ SINGLETON AUTHENTICATOR =====\n');
    console.log("Отримання першого екземпляра Authenticator:");
    var auth1 = Authenticator_1.Authenticator.getInstance();
    console.log("\nОтримання другого екземпляра Authenticator:");
    var auth2 = Authenticator_1.Authenticator.getInstance();
    console.log("\nПеревірка, чи auth1 та auth2 - один і той самий об'єкт:");
    console.log("auth1 === auth2: ".concat(auth1 === auth2));
    console.log("\nТест методу автентифікації:");
    var authResult = auth1.authenticate("admin", "password");
    console.log("\u0420\u0435\u0437\u0443\u043B\u044C\u0442\u0430\u0442 \u0430\u0432\u0442\u0435\u043D\u0442\u0438\u0444\u0456\u043A\u0430\u0446\u0456\u0457: ".concat(authResult));
    console.log("\nСпроба створити екземпляр через ExtendedAuthenticator:");
    try {
        var extAuth = new ExtendedAuthenticator_1.ExtendedAuthenticator();
        console.log("Екземпляр створено (це не повинно статися)");
    }
    catch (error) {
        console.log("\u041F\u043E\u043C\u0438\u043B\u043A\u0430: ".concat(error.message));
    }
    console.log("\nОтримання екземпляру через getExtendedInstance:");
    try {
        var extAuth = ExtendedAuthenticator_1.ExtendedAuthenticator.getExtendedInstance();
        console.log("Екземпляр отримано");
        console.log("extAuth === auth1: ".concat(extAuth === auth1));
        var twoFactorResult = extAuth.twoFactorAuth("admin", "123456");
        console.log("\u0420\u0435\u0437\u0443\u043B\u044C\u0442\u0430\u0442 \u0434\u0432\u043E\u0444\u0430\u043A\u0442\u043E\u0440\u043D\u043E\u0457 \u0430\u0432\u0442\u0435\u043D\u0442\u0438\u0444\u0456\u043A\u0430\u0446\u0456\u0457: ".concat(twoFactorResult));
    }
    catch (error) {
        console.log("\u041F\u043E\u043C\u0438\u043B\u043A\u0430: ".concat(error.message));
    }
    console.log("\n===== ТЕСТУВАННЯ ЗАВЕРШЕНО =====");
}
testSingleton();
