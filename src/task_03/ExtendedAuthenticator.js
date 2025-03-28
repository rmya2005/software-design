"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExtendedAuthenticator = void 0;
var Authenticator_1 = require("./Authenticator");
// Розширений аутентифікатор для демонстрації наслідування
var ExtendedAuthenticator = /** @class */ (function (_super) {
    __extends(ExtendedAuthenticator, _super);
    // Конструктор виконає конструктор батьківського класу
    function ExtendedAuthenticator() {
        return _super.call(this) || this;
    }
    // Додатковий метод для демонстрації функціональності
    ExtendedAuthenticator.prototype.twoFactorAuth = function (username, code) {
        console.log("\u041F\u0435\u0440\u0435\u0432\u0456\u0440\u043A\u0430 \u0434\u0432\u043E\u0444\u0430\u043A\u0442\u043E\u0440\u043D\u043E\u0457 \u0430\u0432\u0442\u0435\u043D\u0442\u0438\u0444\u0456\u043A\u0430\u0446\u0456\u0457 \u0434\u043B\u044F ".concat(username));
        return code === "123456";
    };
    // Статичний метод для спроби отримання екземпляру розширеного класу
    ExtendedAuthenticator.getExtendedInstance = function () {
        // Тут ми можемо отримати лише той самий екземпляр, що й Authenticator.getInstance()
        return Authenticator_1.Authenticator.getInstance();
    };
    return ExtendedAuthenticator;
}(Authenticator_1.Authenticator));
exports.ExtendedAuthenticator = ExtendedAuthenticator;
