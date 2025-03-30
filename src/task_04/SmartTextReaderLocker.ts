import { ITextReader } from './ITextReader';

export class SmartTextReaderLocker implements ITextReader {
    private reader: ITextReader;
    private restrictionPattern: RegExp;
    
    constructor(reader: ITextReader, restrictionPattern: RegExp) {
        this.reader = reader;
        this.restrictionPattern = restrictionPattern;
    }
    
    readFile(filePath: string): string[][] {
        // Перевіряємо обмеження доступу
        if (this.restrictionPattern.test(filePath)) {
            console.log(`[SECURITY] Access denied for file: ${filePath}`);
            return [];
        }
        
        // Якщо файл не обмежений, передаємо запит далі
        return this.reader.readFile(filePath);
    }
}