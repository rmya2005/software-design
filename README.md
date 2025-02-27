# **Warehouse Management System: Programming Principles Analysis**

This project implements a simple **warehouse management system** with classes for tracking products, managing inventory, handling money, and generating reports.

---

## **1. SOLID Principles**

### **Single Responsibility Principle (SRP)**
Each class has a single responsibility:

- **[Product.ts](./src/classes/Product.ts)**: Manages product information
- **[Warehouse.ts](./src/classes/Warehouse.ts)**: Manages inventory
- **[Money.ts](./src/classes/Money.ts)**: Handles money calculations
- **[Reporting.ts](./src/classes/Reporting.ts)**: Generates reports

For example, the `Product` class deals only with product-related attributes and behaviors, while `Warehouse` only handles the collection of products.

### **Open/Closed Principle (OCP)**
The code allows extension without modification:

- **[Product.ts](./src/classes/Product.ts)**: Implements `IProduct` interface, allowing for extensions.
- New product types can be added by **extending** the `Product` class without modifying it.

### **Liskov Substitution Principle (LSP)**
The system maintains **LSP** through interfaces:

- **[Product.ts](./src/classes/Product.ts)**: Implements `IProduct` to ensure interchangeability.
- **[Money.ts](./src/classes/Money.ts)**: Implements `IMoney`.

### **Interface Segregation Principle (ISP)**
The interfaces are focused and specific:

- **[Product.ts](./src/classes/Product.ts)**: `IProduct` defines only necessary properties for a product.
- **[Money.ts](./src/classes/Money.ts)**: `IMoney` includes only the methods needed for money operations.

### **Dependency Inversion Principle (DIP)**
The system relies on **abstractions**:

- **[Reporting.ts](./src/classes/Reporting.ts)**: Uses `Warehouse` rather than concrete implementations.
- **[Product.ts](./src/classes/Product.ts)**: Dependencies are based on **interfaces** rather than concrete implementations.

---

## **2. DRY (Don't Repeat Yourself)**
Repetitive logic is centralized:

- **[Product.ts](./src/classes/Product.ts)**: `log()` method ensures a single way to display product info.
- **[Warehouse.ts](./src/classes/Warehouse.ts)**: `listProducts()` provides a single place for listing products.

---

## **3. KISS (Keep It Simple, Stupid)**
The code remains **simple and easy to understand**:

- **[Money.ts](./src/classes/Money.ts)**: Straightforward money handling.
- **[Product.ts](./src/classes/Product.ts)**: Clear methods for updating quantities and prices.

---

## **4. YAGNI (You Aren't Gonna Need It)**
The project avoids **unnecessary complexity**:

- **[Warehouse.ts](./src/classes/Warehouse.ts)**: Only essential methods for managing inventory.
- **[Reporting.ts](./src/classes/Reporting.ts)**: Includes only the necessary reporting functionality.

---

## **5. Composition Over Inheritance**
The system prefers **composition** over **inheritance**:

- **[Warehouse.ts](./src/classes/Warehouse.ts)**: `Warehouse` **contains** products rather than extending them.
- **[Reporting.ts](./src/classes/Reporting.ts)**: Uses objects instead of inheriting from them.

---

## **6. Program to Interfaces, Not Implementations**
The code adheres to this principle:

- **[Product.ts](./src/classes/Product.ts)**: `Product` implements `IProduct`.
- **[Money.ts](./src/classes/Money.ts)**: `Money` implements `IMoney`.

---

## **7. Fail Fast**
The code includes **basic error handling**:

- **[Product.ts](./src/classes/Product.ts)**: `updateQuantity()` prevents negative values.

---

## **🔹 Areas for Improvement**
- More **comprehensive error handling**.
- Additional **input validation**.
- More consistent **use of interfaces** across all classes.
- Improved **encapsulation** with more private methods and properties.
