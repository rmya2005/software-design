export abstract class LightNode {
    abstract render(): string;
    abstract getChildCount(): number;
    
    // Додаємо метод outerHTML як аліас для render()
    outerHTML(): string {
        return this.render();
    }
}