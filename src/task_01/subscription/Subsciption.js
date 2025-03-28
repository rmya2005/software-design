"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Subscription = void 0;
var Subscription = /** @class */ (function () {
    function Subscription(monthlyFee, minimumPeriod, channels, features) {
        this.monthlyFee = monthlyFee;
        this.minimumPeriod = minimumPeriod;
        this.channels = channels;
        this.features = features;
    }
    Subscription.prototype.getMonthlyFee = function () {
        return this.monthlyFee;
    };
    Subscription.prototype.getMinimumPeriod = function () {
        return this.minimumPeriod;
    };
    Subscription.prototype.getChannels = function () {
        return this.channels;
    };
    Subscription.prototype.getFeatures = function () {
        return this.features;
    };
    Subscription.prototype.getInfo = function () {
        return "\n            \u0422\u0438\u043F \u043F\u0456\u0434\u043F\u0438\u0441\u043A\u0438: ".concat(this.getType(), "\n            \u0429\u043E\u043C\u0456\u0441\u044F\u0447\u043D\u0430 \u043F\u043B\u0430\u0442\u0430: ").concat(this.monthlyFee, " \u0433\u0440\u043D\n            \u041C\u0456\u043D\u0456\u043C\u0430\u043B\u044C\u043D\u0438\u0439 \u043F\u0435\u0440\u0456\u043E\u0434: ").concat(this.minimumPeriod, " \u043C\u0456\u0441\u044F\u0446\u0456\u0432\n            \u041A\u0430\u043D\u0430\u043B\u0438: ").concat(this.channels.join(', '), "\n            \u041C\u043E\u0436\u043B\u0438\u0432\u043E\u0441\u0442\u0456: ").concat(this.features.join(', '), "\n        ");
    };
    return Subscription;
}());
exports.Subscription = Subscription;
