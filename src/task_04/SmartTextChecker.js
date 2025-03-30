"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SmartTextChecker = void 0;
var SmartTextChecker = /** @class */ (function () {
    function SmartTextChecker(reader) {
        this.reader = reader;
    }
    SmartTextChecker.prototype.readFile = function (filePath) {
        console.log("[INFO] Opening file: ".concat(filePath));
        var startTime = Date.now();
        var result = this.reader.readFile(filePath);
        var endTime = Date.now();
        console.log("[INFO] Reading completed in ".concat(endTime - startTime, "ms"));
        console.log("[INFO] File closed: ".concat(filePath));
        // Статистика про прочитаний файл
        var totalLines = result.length;
        var totalChars = result.reduce(function (sum, line) { return sum + line.length; }, 0);
        console.log("[STATS] Total lines: ".concat(totalLines, ", Total characters: ").concat(totalChars));
        return result;
    };
    return SmartTextChecker;
}());
exports.SmartTextChecker = SmartTextChecker;
