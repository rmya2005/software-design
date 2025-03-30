import * as fs from 'fs';

export class FileWriter {
    private filePath: string;

    constructor(filePath: string) {
        this.filePath = filePath;
    }

    Write(content: string): void {
        fs.appendFileSync(this.filePath, content);
    }

    WriteLine(content: string): void {
        fs.appendFileSync(this.filePath, content + '\n');
    }
}