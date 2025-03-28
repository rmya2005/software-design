class Virus {
    private weight: number;
    private age: number;
    private name: string;
    private species: string;
    private children: Virus[];

    constructor(weight: number, age: number, name: string, species: string, children: Virus[] = []) {
        this.weight = weight;
        this.age = age;
        this.name = name;
        this.species = species;
        this.children = children;
    }

    getWeight(): number { return this.weight; }
    setWeight(weight: number): void { this.weight = weight; }

    getAge(): number { return this.age; }
    setAge(age: number): void { this.age = age; }

    getName(): string { return this.name; }
    setName(name: string): void { this.name = name; }

    getSpecies(): string { return this.species; }
    setSpecies(species: string): void { this.species = species; }

    getChildren(): Virus[] { return this.children; }

    
    
    addChild(child: Virus): void {
        this.children.push(child);
    }

    clone(): Virus {
        const clonedChildren = this.children.map(child => child.clone());
        
        return new Virus(
            this.weight,
            this.age,
            this.name,
            this.species,
            clonedChildren
        );
    }

    toString(): string {
        return `Вірус: ${this.name}, Вид: ${this.species}, Вік: ${this.age}, Вага: ${this.weight}, Кількість дітей: ${this.children.length}`;
    }

    displayFamilyTree(indent: string = ""): string {
        let result = `${indent}${this.toString()}\n`;
        
        for (const child of this.children) {
            result += child.displayFamilyTree(indent + "  ");
        }
        
        return result;
    }
}

function testVirusCloning() {
    console.log('===== ТЕСТУВАННЯ КЛОНУВАННЯ ВІРУСІВ =====\n');
    
    const grandfather = new Virus(1.5, 10, "COVID-19", "Coronavirus");
    
    const father1 = new Virus(1.2, 5, "Delta", "Coronavirus");
    const father2 = new Virus(1.0, 4, "Alpha", "Coronavirus");
    
    grandfather.addChild(father1);
    grandfather.addChild(father2);
    
    const child1 = new Virus(0.8, 2, "Delta Plus", "Coronavirus");
    const child2 = new Virus(0.7, 1, "Delta Lite", "Coronavirus");
    
    father1.addChild(child1);
    father1.addChild(child2);
    
    const child3 = new Virus(0.9, 2, "Alpha Plus", "Coronavirus");
    
    father2.addChild(child3);
    
    console.log("Оригінальне сімейство вірусів:");
    console.log(grandfather.displayFamilyTree());
    
    const clonedGrandfather = grandfather.clone();
    
    console.log("\nПеревірка, що клонований вірус - це окремий об'єкт:");
    console.log(`grandfather === clonedGrandfather: ${grandfather === clonedGrandfather}`);
    
    clonedGrandfather.setName("COVID-19 Мутований");
    clonedGrandfather.setAge(11);
    
    console.log("\nКлоноване і модифіковане сімейство вірусів:");
    console.log(clonedGrandfather.displayFamilyTree());
    
    console.log("\nОригінальне сімейство вірусів (не змінилося):");
    console.log(grandfather.displayFamilyTree());
    
    console.log('\n===== ТЕСТУВАННЯ ЗАВЕРШЕНО =====');
}

testVirusCloning();