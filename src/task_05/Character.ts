export class Character {
    private name: string = "";
    private type: string = "";
    private height: number = 0;
    private build: string = "";
    private hairColor: string = "";
    private eyeColor: string = "";
    private clothes: string[] = [];
    private inventory: string[] = [];
    private specialAbilities: string[] = [];
    private goodDeeds: string[] = [];
    private evilDeeds: string[] = [];

    setName(name: string): void { this.name = name; }
    getName(): string { return this.name; }

    setType(type: string): void { this.type = type; }
    getType(): string { return this.type; }

    setHeight(height: number): void { this.height = height; }
    getHeight(): number { return this.height; }

    setBuild(build: string): void { this.build = build; }
    getBuild(): string { return this.build; }

    setHairColor(color: string): void { this.hairColor = color; }
    getHairColor(): string { return this.hairColor; }

    setEyeColor(color: string): void { this.eyeColor = color; }
    getEyeColor(): string { return this.eyeColor; }

    addClothes(item: string): void { this.clothes.push(item); }
    getClothes(): string[] { return this.clothes; }

    addInventoryItem(item: string): void { this.inventory.push(item); }
    getInventory(): string[] { return this.inventory; }

    addSpecialAbility(ability: string): void { this.specialAbilities.push(ability); }
    getSpecialAbilities(): string[] { return this.specialAbilities; }

    addGoodDeed(deed: string): void { this.goodDeeds.push(deed); }
    getGoodDeeds(): string[] { return this.goodDeeds; }

    addEvilDeed(deed: string): void { this.evilDeeds.push(deed); }
    getEvilDeeds(): string[] { return this.evilDeeds; }

    getDescription(): string {
        let description = `Character: ${this.name} (${this.type})\n`;
        description += `Height: ${this.height} cm\n`;
        description += `Build: ${this.build}\n`;
        description += `Hair color: ${this.hairColor}\n`;
        description += `Eye color: ${this.eyeColor}\n`;
        
        if (this.clothes.length > 0) {
            description += "Clothes:\n";
            this.clothes.forEach(item => description += `  - ${item}\n`);
        }
        
        if (this.inventory.length > 0) {
            description += "Inventory:\n";
            this.inventory.forEach(item => description += `  - ${item}\n`);
        }
        
        if (this.specialAbilities.length > 0) {
            description += "Special abilities:\n";
            this.specialAbilities.forEach(ability => description += `  - ${ability}\n`);
        }
        
        if (this.goodDeeds.length > 0) {
            description += "Good deeds:\n";
            this.goodDeeds.forEach(deed => description += `  - ${deed}\n`);
        }
        
        if (this.evilDeeds.length > 0) {
            description += "Evil deeds:\n";
            this.evilDeeds.forEach(deed => description += `  - ${deed}\n`);
        }
        
        return description;
    }
}