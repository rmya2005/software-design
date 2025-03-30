export class MemoryUsage {
    static getMegabytes(bytes: number): number {
        return bytes / (1024 * 1024);
    }
    
    static formatMemoryUsage(memoryUsage: NodeJS.MemoryUsage): string {
        const rss = this.getMegabytes(memoryUsage.rss);
        const heapTotal = this.getMegabytes(memoryUsage.heapTotal);
        const heapUsed = this.getMegabytes(memoryUsage.heapUsed);
        
        return `RSS: ${rss.toFixed(2)} MB, Heap Total: ${heapTotal.toFixed(2)} MB, Heap Used: ${heapUsed.toFixed(2)} MB`;
    }
    
    static printMemoryUsage(label: string): void {
        const memoryUsage = process.memoryUsage();
        console.log(`${label}: ${this.formatMemoryUsage(memoryUsage)}`);
    }
}