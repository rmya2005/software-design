import * as fs from 'fs';
import * as path from 'path';
import { LightHTMLFlyweight } from './LightHTMLFlyweight';
import { BookParser } from './BookParser';

function main(): void {
    console.log("=== LightHTML з використанням паттерну Легковаговик ===\n");
    
    console.log("Читання тексту з файлу...");
    const textFilePath = path.join(__dirname, 'text.txt');
    let bookText;
    
    try {
        bookText = fs.readFileSync(textFilePath, 'utf8');
        console.log(`Успішно прочитано файл: ${textFilePath}`);
        console.log(`Розмір файлу: ${(bookText.length / 1024).toFixed(2)} KB`);
    } catch (error) {
        console.error(`Помилка читання файлу ${textFilePath}: ${error}`);
        console.log("Використовуємо запасний текст...");
        
        bookText = `Назва книги\n\n` +
                  `Розділ 1\n\n` +
                  `Це звичайний параграф тексту для демонстрації роботи програми.\n` +
                  `  Це цитата з відступом на початку рядка.\n` +
                  `Короткий заголовок\n` +
                  `Ще один звичайний параграф тексту, який має більше 20 символів.\n`;
    }
    
    const parser = new BookParser();
    console.log("\nПеретворення тексту в HTML з використанням Легковаговика...");
    
    const htmlRoot = parser.parseBookToHTML(bookText);
    
    console.log(`Загальна кількість HTML елементів: ${htmlRoot.getChildCount() + 1}`); // +1 для кореневого елементу
    console.log(`Використано унікальних типів елементів (легковаговиків): ${LightHTMLFlyweight.getFlyweightCount()}`);
    
    console.log("\n=== Приклад HTML (перші 300 символів) ===");
    console.log(htmlRoot.outerHTML().substring(0, 1000) + "...");
    
    console.log("\n=== Інформація про використання патерну Легковаговик ===");
    console.log(`1. Замість створення окремого об'єкта для кожного HTML елемента,`);
    console.log(`   ми використовуємо спільні характеристики елементів (легковаговики).`);
    console.log(`2. Всі елементи одного типу (наприклад, всі <p>) використовують одну й`);
    console.log(`   ту саму легку структуру даних для збереження спільних атрибутів.`);
    console.log(`3. Патерн Легковаговик дозволяє значно зменшити кількість об'єктів`);
    console.log(`   у пам'яті та покращити продуктивність для великих документів.`);
}

main();