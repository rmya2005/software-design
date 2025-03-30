import ILogger from './ILogger';
import { FileWriter } from './FileWriter';

export class FileLoggerAdapter implements ILogger {
    private fileWriter: FileWriter;

    constructor(fileWriter: FileWriter) {
        this.fileWriter = fileWriter;
    }

    Log(message: string): void {
        this.fileWriter.WriteLine(`[INFO] ${message}`);
    }

    Error(message: string): void {
        this.fileWriter.WriteLine(`[ERROR] ${message}`);
    }

    Warn(message: string): void {
        this.fileWriter.WriteLine(`[WARNING] ${message}`);
    }
}