"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FileLoggerAdapter = void 0;
var FileLoggerAdapter = /** @class */ (function () {
    function FileLoggerAdapter(fileWriter) {
        this.fileWriter = fileWriter;
    }
    FileLoggerAdapter.prototype.Log = function (message) {
        this.fileWriter.WriteLine("[INFO] ".concat(message));
    };
    FileLoggerAdapter.prototype.Error = function (message) {
        this.fileWriter.WriteLine("[ERROR] ".concat(message));
    };
    FileLoggerAdapter.prototype.Warn = function (message) {
        this.fileWriter.WriteLine("[WARNING] ".concat(message));
    };
    return FileLoggerAdapter;
}());
exports.FileLoggerAdapter = FileLoggerAdapter;
