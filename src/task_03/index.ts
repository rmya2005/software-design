import { VectorRenderer, RasterRenderer } from "./renderers/Renderers";
import { Circle, Square, Triangle } from "./shapes/Shapes";

function main(): void {
    console.log("=== Graphics Editor with Bridge Pattern ===\n");
    
    const vectorRenderer = new VectorRenderer();
    const rasterRenderer = new RasterRenderer();
    
    console.log("Testing different shapes with vector renderer:");
    const vectorCircle = new Circle(vectorRenderer);
    const vectorSquare = new Square(vectorRenderer);
    const vectorTriangle = new Triangle(vectorRenderer);
    
    vectorCircle.draw();
    vectorSquare.draw();
    vectorTriangle.draw();
    
    console.log("\nTesting different shapes with raster renderer:");
    const rasterCircle = new Circle(rasterRenderer);
    const rasterSquare = new Square(rasterRenderer);
    const rasterTriangle = new Triangle(rasterRenderer);
    
    rasterCircle.draw();
    rasterSquare.draw();
    rasterTriangle.draw();
    
    console.log("\nChanging renderer at runtime:");
    vectorCircle.setRenderer(rasterRenderer);
    vectorCircle.draw();  
    
    rasterSquare.setRenderer(vectorRenderer);
    rasterSquare.draw();  
}

main();