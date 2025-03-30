import IHero from "../IHero";

export class Warrior implements IHero {
    type: string = "Warrior";
    
    getAttack(): number {
        return 10;
    }
    
    getDefense(): number {
        return 8;
    }
    
    getMagic(): number {
        return 2;
    }
    
    getDescription(): string {
        return "Mighty Warrior";
    }
}

export class Mage implements IHero {
    type: string = "Mage";
    
    getAttack(): number {
        return 4;
    }
    
    getDefense(): number {
        return 3;
    }
    
    getMagic(): number {
        return 15;
    }
    
    getDescription(): string {
        return "Wise Mage";
    }
}

export class Paladin implements IHero {
    type: string = "Paladin";
    
    getAttack(): number {
        return 8;
    }
    
    getDefense(): number {
        return 10;
    }
    
    getMagic(): number {
        return 6;
    }
    
    getDescription(): string {
        return "Holy Paladin";
    }
}