import Product from "./Product";
import Warehouse from "./Warehouse";

class Reporting {
    private incomeReport: { product: Product, quantify: number, date: Date }[] = []
    private outcomeReport: { product: Product, quantify: number, date: Date }[] = []


    addIncome(product: Product, quantify: number, date: Date): void {
        this.incomeReport.push({product, quantify, date: new Date()})
        console.log(`New income product: ${product.name} - ${quantify}`)

    }

    addOutcome(product: Product, quantify: number, date: Date): void {
        this.outcomeReport.push({product, quantify, date: new Date()})
        console.log(`New income product: ${product.name} - ${quantify}`)

    }


    inventReport(warehouse: Warehouse): void {
        console.log("Report of product on warehouse")
        warehouse.listProducts()
    }


}

export default Reporting