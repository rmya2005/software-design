import { ITextReader } from './ITextReader';

export class SmartTextChecker implements ITextReader {
    private reader: ITextReader;
    
    constructor(reader: ITextReader) {
        this.reader = reader;
    }
    
    readFile(filePath: string): string[][] {
        console.log(`[INFO] Opening file: ${filePath}`);
        
        const startTime = Date.now();
        const result = this.reader.readFile(filePath);
        const endTime = Date.now();
        
        console.log(`[INFO] Reading completed in ${endTime - startTime}ms`);
        console.log(`[INFO] File closed: ${filePath}`);
        
        // Статистика про прочитаний файл
        const totalLines = result.length;
        const totalChars = result.reduce((sum, line) => sum + line.length, 0);
        
        console.log(`[STATS] Total lines: ${totalLines}, Total characters: ${totalChars}`);
        
        return result;
    }
}