"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FileWriter = void 0;
var fs = require("fs");
var FileWriter = /** @class */ (function () {
    function FileWriter(filePath) {
        this.filePath = filePath;
    }
    FileWriter.prototype.Write = function (content) {
        fs.appendFileSync(this.filePath, content);
    };
    FileWriter.prototype.WriteLine = function (content) {
        fs.appendFileSync(this.filePath, content + '\n');
    };
    return FileWriter;
}());
exports.FileWriter = FileWriter;
