    "use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var SmartTextReader_1 = require("./SmartTextReader");
var SmartTextChecker_1 = require("./SmartTextChecker");
var SmartTextReaderLocker_1 = require("./SmartTextReaderLocker");
var path = require("path");
function displayTextContent(content, maxLines) {
    if (maxLines === void 0) { maxLines = 3; }
    console.log('--- File Content (preview) ---');
    for (var i = 0; i < Math.min(content.length, maxLines); i++) {
        console.log(content[i].join(''));
    }
    if (content.length > maxLines) {
        console.log("... (".concat(content.length - maxLines, " more lines)"));
    }
    console.log('----------------------------\n');
}
function main() {
    console.log('=== Smart Text Reader with Proxy Pattern ===\n');
    var baseReader = new SmartTextReader_1.SmartTextReader();
    var loggedReader = new SmartTextChecker_1.SmartTextChecker(baseReader);
    var restrictedReader = new SmartTextReaderLocker_1.SmartTextReaderLocker(loggedReader, /confidential/i);
    var sampleFilePath = path.join(__dirname, 'sample.txt');
    var confidentialFilePath = path.join(__dirname, 'confidential.txt');
    console.log('\n--- Test 1: Reading a normal file ---');
    var normalFileContent = restrictedReader.readFile(sampleFilePath);
    displayTextContent(normalFileContent);
    console.log('\n--- Test 2: Attempting to read a restricted file ---');
    var restrictedFileContent = restrictedReader.readFile(confidentialFilePath);
    displayTextContent(restrictedFileContent);
    console.log('\n--- Test 3: Bypassing restriction (reading directly) ---');
    var bypassResult = loggedReader.readFile(confidentialFilePath);
    displayTextContent(bypassResult);
}
main();
