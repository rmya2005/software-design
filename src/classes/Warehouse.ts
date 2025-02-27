import Product from "./Product";

class Warehouse {
    private products: Product[] = [];


    addProduct(product: Product): void {
        this.products.push(product);
    }

    removeProduct(name: string): void {
        this.products = this.products.filter(p => p.name !== name);
    }

    findProduct(name: string): Product | undefined {
        return this.products.find(p => p.name === name);
    }

    listProducts(): void {
        console.log("Товари на складі:");
        this.products.forEach(p => {
            console.log(`${p.name} - ${p.quantity} ${p.unit}, $${p.price} (Завезено: ${p.lastSupplyDate.toLocaleDateString()})`);
        });
    }
}


export default Warehouse