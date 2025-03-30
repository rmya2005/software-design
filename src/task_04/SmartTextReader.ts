import * as fs from 'fs';
import { ITextReader } from './ITextReader';

export class SmartTextReader implements ITextReader {
    readFile(filePath: string): string[][] {
        try {
            const content = fs.readFileSync(filePath, 'utf8');
            
            const lines = content.split('\n');
            const result: string[][] = [];
            
            for (const line of lines) {
                result.push(line.split('')); 
            }
            
            return result;
        } catch (error) {
            console.error(`Error reading file ${filePath}: ${error}`);
            return [];
        }
    }
}