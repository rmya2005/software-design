import { IRenderEngine } from "../IRenderEngine";

export class VectorRenderer implements IRenderEngine {
    renderShape(shapeName: string): void {
        console.log(`Drawing ${shapeName} as vector graphics`);
    }
}

export class RasterRenderer implements IRenderEngine {
    renderShape(shapeName: string): void {
        console.log(`Drawing ${shapeName} as pixels`);
    }
}