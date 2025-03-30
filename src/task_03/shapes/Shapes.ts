import { Shape } from "./Shape";
import { IRenderEngine } from "../IRenderEngine";

export class Circle extends Shape {
    constructor(renderer: IRenderEngine) {
        super(renderer);
    }
    
    draw(): void {
        this.renderer.renderShape("Circle");
    }
}

export class Square extends Shape {
    constructor(renderer: IRenderEngine) {
        super(renderer);
    }
    
    draw(): void {
        this.renderer.renderShape("Square");
    }
}

export class Triangle extends Shape {
    constructor(renderer: IRenderEngine) {
        super(renderer);
    }
    
    draw(): void {
        this.renderer.renderShape("Triangle");
    }
}