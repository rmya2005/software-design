export interface ITextReader {
    readFile(filePath: string): string[][];
}