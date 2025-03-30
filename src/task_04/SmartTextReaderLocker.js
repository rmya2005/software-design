"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SmartTextReaderLocker = void 0;
var SmartTextReaderLocker = /** @class */ (function () {
    function SmartTextReaderLocker(reader, restrictionPattern) {
        this.reader = reader;
        this.restrictionPattern = restrictionPattern;
    }
    SmartTextReaderLocker.prototype.readFile = function (filePath) {
        // Перевіряємо обмеження доступу
        if (this.restrictionPattern.test(filePath)) {
            console.log("[SECURITY] Access denied for file: ".concat(filePath));
            return [];
        }
        // Якщо файл не обмежений, передаємо запит далі
        return this.reader.readFile(filePath);
    };
    return SmartTextReaderLocker;
}());
exports.SmartTextReaderLocker = SmartTextReaderLocker;
