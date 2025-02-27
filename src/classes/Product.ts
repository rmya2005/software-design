interface IProduct {
    name: string;
    unit: string;
    price: number;
    quantity: number;
    lastSupplyDate: Date;
}

class Product implements IProduct {
    name: string;
    unit: string;
    price: number;
    quantity: number;
    lastSupplyDate: Date;

    constructor(name: string, unit: string, price: number, quantity: number, lastSupplyDate: Date) {
        this.name = name;
        this.unit = unit;
        this.price = price;
        this.quantity = quantity;
        this.lastSupplyDate = lastSupplyDate;
    }

    updateQuantity(amount: number): void {
        this.quantity = Math.max(this.quantity + amount, 0);
    }

    updatePrice(newPrice: number): void {
        this.price = newPrice;
    }
    Log(){
        console.log(`Name:${this.name} || Unit:${this.unit} || Price:${this.price} || Quantify:${this.quantity} || Last supply:${this.lastSupplyDate}`)
    }
}

export default Product