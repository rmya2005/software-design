"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ConsoleLogger_1 = require("./ConsoleLogger");
var FileWriter_1 = require("./FileWriter");
var FileLoggerAdapter_1 = require("./FileLoggerAdapter");
function main() {
    var consoleLogger = new ConsoleLogger_1.default();
    console.log("Testing Console Logger:");
    consoleLogger.Log("This is an information message");
    consoleLogger.Error("This is an error message");
    consoleLogger.Warn("This is a warning message");
    console.log("\n");
    var fileWriter = new FileWriter_1.FileWriter('log.txt');
    var fileLogger = new FileLoggerAdapter_1.FileLoggerAdapter(fileWriter);
    console.log("Testing File Logger (check log.txt file):");
    fileLogger.Log("This is an information message saved to file");
    fileLogger.Error("This is an error message saved to file");
    fileLogger.Warn("This is a warning message saved to file");
}
main();
