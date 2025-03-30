"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BookParser = void 0;
var LightHTMLFlyweight_1 = require("./LightHTMLFlyweight");
var BookParser = /** @class */ (function () {
    function BookParser() {
    }
    BookParser.prototype.parseBookToHTML = function (bookText) {
        var lines = bookText.split('\n');
        var rootElement = LightHTMLFlyweight_1.LightHTMLFlyweight.createElement('div');
        for (var i = 0; i < lines.length; i++) {
            var line = lines[i].trim();
            if (line === '')
                continue;
            var element = void 0;
            if (i === 0) {
                element = LightHTMLFlyweight_1.LightHTMLFlyweight.createElement('h1');
                element.addChild(LightHTMLFlyweight_1.LightHTMLFlyweight.createText(line));
            }
            else if (line.length < 20) {
                element = LightHTMLFlyweight_1.LightHTMLFlyweight.createElement('h2');
                element.addChild(LightHTMLFlyweight_1.LightHTMLFlyweight.createText(line));
            }
            else if (lines[i].startsWith(' ') || lines[i].startsWith('\t')) {
                element = LightHTMLFlyweight_1.LightHTMLFlyweight.createElement('blockquote');
                element.addChild(LightHTMLFlyweight_1.LightHTMLFlyweight.createText(line));
            }
            else {
                element = LightHTMLFlyweight_1.LightHTMLFlyweight.createElement('p');
                element.addChild(LightHTMLFlyweight_1.LightHTMLFlyweight.createText(line));
            }
            rootElement.addChild(element);
        }
        return rootElement;
    };
    return BookParser;
}());
exports.BookParser = BookParser;
