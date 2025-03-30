"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var LightHTML_1 = require("./LightHTML");
var LightElementNode_1 = require("./LightElementNode");
function main() {
    console.log("=== LightHTML Demonstration ===\n");
    var table = LightHTML_1.LightHTML.createElement('table');
    table.addClass('student-table');
    table.addClass('bordered');
    var thead = LightHTML_1.LightHTML.createElement('thead');
    var headerRow = LightHTML_1.LightHTML.createElement('tr');
    var headers = ['ID', 'Ім\'я', 'Прізвище', 'Оцінка'];
    headers.forEach(function (headerText) {
        var th = LightHTML_1.LightHTML.createElement('th');
        th.addChild(LightHTML_1.LightHTML.createText(headerText));
        headerRow.addChild(th);
    });
    thead.addChild(headerRow);
    table.addChild(thead);
    var tbody = LightHTML_1.LightHTML.createElement('tbody');
    var students = [
        { id: 1, firstName: 'Іван', lastName: 'Петренко', grade: 90 },
        { id: 2, firstName: 'Марія', lastName: 'Коваль', grade: 95 },
        { id: 3, firstName: 'Олег', lastName: 'Сидоренко', grade: 85 }
    ];
    students.forEach(function (student) {
        var row = LightHTML_1.LightHTML.createElement('tr');
        var idCell = LightHTML_1.LightHTML.createElement('td');
        idCell.addChild(LightHTML_1.LightHTML.createText(student.id.toString()));
        row.addChild(idCell);
        var firstNameCell = LightHTML_1.LightHTML.createElement('td');
        firstNameCell.addChild(LightHTML_1.LightHTML.createText(student.firstName));
        row.addChild(firstNameCell);
        var lastNameCell = LightHTML_1.LightHTML.createElement('td');
        lastNameCell.addChild(LightHTML_1.LightHTML.createText(student.lastName));
        row.addChild(lastNameCell);
        var gradeCell = LightHTML_1.LightHTML.createElement('td');
        gradeCell.addChild(LightHTML_1.LightHTML.createText(student.grade.toString()));
        row.addChild(gradeCell);
        tbody.addChild(row);
    });
    table.addChild(tbody);
    var caption = LightHTML_1.LightHTML.createElement('caption');
    caption.addChild(LightHTML_1.LightHTML.createText('Таблиця студентів'));
    table.addChild(caption);
    console.log("HTML Code:");
    console.log(table.outerHTML());
    console.log("\nStructure Information:");
    console.log("Total child elements: ".concat(table.getChildCount()));
    console.log("\n=== Product Card Example ===\n");
    var card = LightHTML_1.LightHTML.createElement('div');
    card.addClass('product-card');
    var img = LightHTML_1.LightHTML.createElement('img', LightElementNode_1.DisplayType.INLINE, LightElementNode_1.ClosingType.SELF_CLOSING);
    img.setAttribute('src', 'product.jpg');
    img.setAttribute('alt', 'Product Image');
    card.addChild(img);
    var title = LightHTML_1.LightHTML.createElement('h2', LightElementNode_1.DisplayType.BLOCK);
    title.addChild(LightHTML_1.LightHTML.createText('Смартфон XYZ'));
    card.addChild(title);
    var description = LightHTML_1.LightHTML.createElement('p', LightElementNode_1.DisplayType.BLOCK);
    description.addChild(LightHTML_1.LightHTML.createText('Новий потужний смартфон з великим екраном та тривалим часом роботи батареї.'));
    card.addChild(description);
    var priceBlock = LightHTML_1.LightHTML.createElement('div', LightElementNode_1.DisplayType.BLOCK);
    priceBlock.addClass('price');
    priceBlock.addChild(LightHTML_1.LightHTML.createText('9999 грн'));
    card.addChild(priceBlock);
    var button = LightHTML_1.LightHTML.createElement('button', LightElementNode_1.DisplayType.INLINE);
    button.addClass('buy-button');
    button.addChild(LightHTML_1.LightHTML.createText('Купити'));
    card.addChild(button);
    console.log("HTML Code:");
    console.log(card.outerHTML());
    console.log("\nInner HTML of the card:");
    console.log(card.innerHTML());
}
main();
