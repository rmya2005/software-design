"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SmartTextReader = void 0;
var fs = require("fs");
var SmartTextReader = /** @class */ (function () {
    function SmartTextReader() {
    }
    SmartTextReader.prototype.readFile = function (filePath) {
        try {
            var content = fs.readFileSync(filePath, 'utf8');
            var lines = content.split('\n');
            var result = [];
            for (var _i = 0, lines_1 = lines; _i < lines_1.length; _i++) {
                var line = lines_1[_i];
                result.push(line.split(''));
            }
            return result;
        }
        catch (error) {
            console.error("Error reading file ".concat(filePath, ": ").concat(error));
            return [];
        }
    };
    return SmartTextReader;
}());
exports.SmartTextReader = SmartTextReader;
