import IHero from "../IHero";
import { HeroDecorator } from "./HeroDecorator";

export class Amulet extends HeroDecorator {
    constructor(hero: IHero) {
        super(hero);
    }
    
    getMagic(): number {
        return this.hero.getMagic() + 5;
    }
    
    getDescription(): string {
        return `${this.hero.getDescription()} with Mystical Amulet`;
    }
}

export class Ring extends HeroDecorator {
    constructor(hero: IHero) {
        super(hero);
    }
    
    getAttack(): number {
        return this.hero.getAttack() + 3;
    }
    
    getMagic(): number {
        return this.hero.getMagic() + 3;
    }
    
    getDescription(): string {
        return `${this.hero.getDescription()} wearing Ring of Power`;
    }
}

export class Gloves extends HeroDecorator {
    constructor(hero: IHero) {
        super(hero);
    }
    
    getAttack(): number {
        return this.hero.getAttack() + 2;
    }
    
    getDefense(): number {
        return this.hero.getDefense() + 1;
    }
    
    getDescription(): string {
        return `${this.hero.getDescription()} with Enchanted Gloves`;
    }
}