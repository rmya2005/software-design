import money from "./classes/Money";
import Product from "./classes/Product";
import Warehouse from "./classes/Warehouse";
import Reporting from "./classes/Reporting";



console.log("\n FINANCIAL STATUS:");
money.setMoney(1000.22);
money.Log();

console.log("\n NEW PRODUCT ADDITION:");
let iPhone = new Product("Apple iPhone", "шт", 1000, 10, new Date("2024-02-10"));
iPhone.Log();
console.log("\n✏️ PRODUCT PRICE UPDATE:");
iPhone.updatePrice(950);
iPhone.Log();

const warehouse = new Warehouse();

console.log("\n ADDING PRODUCTS TO WAREHOUSE:");
const milk = new Product("Молоко", "л", 1.5, 50, new Date("2024-02-20"));
const bread = new Product("Хліб", "шт", 1.2, 100, new Date("2024-02-25"));
const apples = new Product("Яблука", "кг", 2.0, 30, new Date("2024-02-22"));

warehouse.addProduct(milk);
warehouse.addProduct(bread);
warehouse.addProduct(apples);

console.log(" CURRENT WAREHOUSE INVENTORY:");
warehouse.listProducts();

console.log(" UPDATING PRODUCT QUANTITIES:");
milk.updateQuantity(10);
console.log(`Updated ${milk.name} quantity to: ${milk.quantity} ${milk.unit}`);

apples.updateQuantity(-5);
console.log(`Updated ${apples.name} quantity to: ${apples.quantity} ${apples.unit}`);

console.log("\n REPORTING ACTIVITY:");
const reporting = new Reporting();

console.log("\n INCOME REPORTS:");
reporting.addIncome(iPhone, 2, new Date());
reporting.addIncome(milk, 25, new Date());
reporting.addIncome(bread, 30, new Date());

console.log("OUTCOME REPORTS:");
reporting.addOutcome(iPhone, 1, new Date());
reporting.addOutcome(bread, 15, new Date());

console.log(" FULL INVENTORY REPORT:");
reporting.inventReport(warehouse);

