"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var chalk_1 = require("chalk");
var ConsoleLogger = /** @class */ (function () {
    function ConsoleLogger() {
    }
    ConsoleLogger.prototype.Log = function (message) {
        console.log(chalk_1.default.green(message));
    };
    ConsoleLogger.prototype.Error = function (message) {
        console.log(chalk_1.default.red(message));
    };
    ConsoleLogger.prototype.Warn = function (message) {
        console.log(chalk_1.default.yellow(message));
    };
    return ConsoleLogger;
}());
exports.default = ConsoleLogger;
