import { IRenderEngine } from "../IRenderEngine";

export abstract class Shape {
    protected renderer: IRenderEngine;
    
    constructor(renderer: IRenderEngine) {
        this.renderer = renderer;
    }
    
    // Метод, який має бути реалізований у конкретних фігурах
    abstract draw(): void;
    
    // Можливість змінити рендерер під час виконання
    setRenderer(renderer: IRenderEngine): void {
        this.renderer = renderer;
    }
}