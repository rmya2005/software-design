import IHero from "../IHero";
import { HeroDecorator } from "./HeroDecorator";

export class Helmet extends HeroDecorator {
    constructor(hero: IHero) {
        super(hero);
    }
    
    getDefense(): number {
        return this.hero.getDefense() + 3;
    }
    
    getDescription(): string {
        return `${this.hero.getDescription()} with Steel Helmet`;
    }
}

export class ChestPlate extends HeroDecorator {
    constructor(hero: IHero) {
        super(hero);
    }
    
    getDefense(): number {
        return this.hero.getDefense() + 5;
    }
    
    getDescription(): string {
        return `${this.hero.getDescription()} wearing Iron Chestplate`;
    }
}

export class Boots extends HeroDecorator {
    constructor(hero: IHero) {
        super(hero);
    }
    
    getDefense(): number {
        return this.hero.getDefense() + 2;
    }
    
    getDescription(): string {
        return `${this.hero.getDescription()} with Leather Boots`;
    }
}