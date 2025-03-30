import { SmartTextReader } from './SmartTextReader';
import { SmartTextChecker } from './SmartTextChecker';
import { SmartTextReaderLocker } from './SmartTextReaderLocker';
import * as path from 'path';

function displayTextContent(content: string[][], maxLines: number = 3): void {
    console.log('--- File Content (preview) ---');
    
    for (let i = 0; i < Math.min(content.length, maxLines); i++) {
        console.log(content[i].join(''));
    }
    
    if (content.length > maxLines) {
        console.log(`... (${content.length - maxLines} more lines)`);
    }
    
    console.log('----------------------------\n');
}

function main(): void {
    console.log('=== Smart Text Reader with Proxy Pattern ===\n');
    
    const baseReader = new SmartTextReader();
    
    const loggedReader = new SmartTextChecker(baseReader);
    
    const restrictedReader = new SmartTextReaderLocker(loggedReader, /confidential/i);
    
    const sampleFilePath = path.join(__dirname, 'sample.txt');
    const confidentialFilePath = path.join(__dirname, 'confidential.txt');
    
    console.log('\n--- Test 1: Reading a normal file ---');
    const normalFileContent = restrictedReader.readFile(sampleFilePath);
    displayTextContent(normalFileContent);
    
    console.log('\n--- Test 2: Attempting to read a restricted file ---');
    const restrictedFileContent = restrictedReader.readFile(confidentialFilePath);
    displayTextContent(restrictedFileContent);
    
    console.log('\n--- Test 3: Bypassing restriction (reading directly) ---');
    const bypassResult = loggedReader.readFile(confidentialFilePath);
    displayTextContent(bypassResult);
}

main();