import { LightHTML } from './LightHTML';
import { DisplayType, ClosingType } from './LightElementNode';

function main(): void {
    console.log("=== LightHTML Demonstration ===\n");
    
    const table = LightHTML.createElement('table');
    table.addClass('student-table');
    table.addClass('bordered');
    
    const thead = LightHTML.createElement('thead');
    const headerRow = LightHTML.createElement('tr');
    
    const headers = ['ID', 'Ім\'я', 'Прізвище', 'Оцінка'];
    headers.forEach(headerText => {
        const th = LightHTML.createElement('th');
        th.addChild(LightHTML.createText(headerText));
        headerRow.addChild(th);
    });
    
    thead.addChild(headerRow);
    table.addChild(thead);
    
    const tbody = LightHTML.createElement('tbody');
    
    const students = [
        { id: 1, firstName: 'Іван', lastName: 'Петренко', grade: 90 },
        { id: 2, firstName: 'Марія', lastName: 'Коваль', grade: 95 },
        { id: 3, firstName: 'Олег', lastName: 'Сидоренко', grade: 85 }
    ];
    
    students.forEach(student => {
        const row = LightHTML.createElement('tr');
        
        const idCell = LightHTML.createElement('td');
        idCell.addChild(LightHTML.createText(student.id.toString()));
        row.addChild(idCell);
        
        const firstNameCell = LightHTML.createElement('td');
        firstNameCell.addChild(LightHTML.createText(student.firstName));
        row.addChild(firstNameCell);
        
        const lastNameCell = LightHTML.createElement('td');
        lastNameCell.addChild(LightHTML.createText(student.lastName));
        row.addChild(lastNameCell);
        
        const gradeCell = LightHTML.createElement('td');
        gradeCell.addChild(LightHTML.createText(student.grade.toString()));
        row.addChild(gradeCell);
        
        tbody.addChild(row);
    });
    
    table.addChild(tbody);
    
    const caption = LightHTML.createElement('caption');
    caption.addChild(LightHTML.createText('Таблиця студентів'));
    table.addChild(caption);
    
    console.log("HTML Code:");
    console.log(table.outerHTML());
    
    console.log("\nStructure Information:");
    console.log(`Total child elements: ${table.getChildCount()}`);
    
    console.log("\n=== Product Card Example ===\n");
    
    const card = LightHTML.createElement('div');
    card.addClass('product-card');
    
    const img = LightHTML.createElement('img', DisplayType.INLINE, ClosingType.SELF_CLOSING);
    img.setAttribute('src', 'product.jpg');
    img.setAttribute('alt', 'Product Image');
    card.addChild(img);
    
    const title = LightHTML.createElement('h2', DisplayType.BLOCK);
    title.addChild(LightHTML.createText('Смартфон XYZ'));
    card.addChild(title);
    
    const description = LightHTML.createElement('p', DisplayType.BLOCK);
    description.addChild(LightHTML.createText('Новий потужний смартфон з великим екраном та тривалим часом роботи батареї.'));
    card.addChild(description);
    
    const priceBlock = LightHTML.createElement('div', DisplayType.BLOCK);
    priceBlock.addClass('price');
    priceBlock.addChild(LightHTML.createText('9999 грн'));
    card.addChild(priceBlock);
    
    const button = LightHTML.createElement('button', DisplayType.INLINE);
    button.addClass('buy-button');
    button.addChild(LightHTML.createText('Купити'));
    card.addChild(button);
    
    console.log("HTML Code:");
    console.log(card.outerHTML());
    
    console.log("\nInner HTML of the card:");
    console.log(card.innerHTML());
}

main();