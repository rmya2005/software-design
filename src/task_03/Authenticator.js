"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Authenticator = void 0;
var Authenticator = /** @class */ (function () {
    // Приватний конструктор, щоб запобігти створенню через new
    function Authenticator() {
        // Перевірка, щоб гарантувати, що ніякий підклас не створить новий екземпляр
        if (Authenticator.instance !== null) {
            throw new Error("Екземпляр Authenticator вже існує! Використовуйте getInstance()");
        }
        console.log("Створено екземпляр Authenticator");
    }
    // Публічний метод для отримання єдиного екземпляру
    Authenticator.getInstance = function () {
        if (Authenticator.instance === null) {
            Authenticator.instance = new Authenticator();
        }
        return Authenticator.instance;
    };
    // Метод для автентифікації користувача
    Authenticator.prototype.authenticate = function (username, password) {
        // Проста демонстраційна логіка
        console.log("\u0421\u043F\u0440\u043E\u0431\u0430 \u0430\u0432\u0442\u0435\u043D\u0442\u0438\u0444\u0456\u043A\u0430\u0446\u0456\u0457 \u043A\u043E\u0440\u0438\u0441\u0442\u0443\u0432\u0430\u0447\u0430: ".concat(username));
        return username === "admin" && password === "password";
    };
    // Метод для виходу з системи
    Authenticator.prototype.logout = function (username) {
        console.log("\u041A\u043E\u0440\u0438\u0441\u0442\u0443\u0432\u0430\u0447 ".concat(username, " \u0432\u0438\u0439\u0448\u043E\u0432 \u0456\u0437 \u0441\u0438\u0441\u0442\u0435\u043C\u0438"));
    };
    // Приватне статичне поле для зберігання єдиного екземпляру
    Authenticator.instance = null;
    return Authenticator;
}());
exports.Authenticator = Authenticator;
