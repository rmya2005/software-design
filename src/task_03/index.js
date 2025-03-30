"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Renderers_1 = require("./renderers/Renderers");
var Shapes_1 = require("./shapes/Shapes");
function main() {
    console.log("=== Graphics Editor with Bridge Pattern ===\n");
    var vectorRenderer = new Renderers_1.VectorRenderer();
    var rasterRenderer = new Renderers_1.RasterRenderer();
    console.log("Testing different shapes with vector renderer:");
    var vectorCircle = new Shapes_1.Circle(vectorRenderer);
    var vectorSquare = new Shapes_1.Square(vectorRenderer);
    var vectorTriangle = new Shapes_1.Triangle(vectorRenderer);
    vectorCircle.draw();
    vectorSquare.draw();
    vectorTriangle.draw();
    console.log("\nTesting different shapes with raster renderer:");
    var rasterCircle = new Shapes_1.Circle(rasterRenderer);
    var rasterSquare = new Shapes_1.Square(rasterRenderer);
    var rasterTriangle = new Shapes_1.Triangle(rasterRenderer);
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
