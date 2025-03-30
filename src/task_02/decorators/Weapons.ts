import IHero from "../IHero";
import { HeroDecorator } from "./HeroDecorator";

export class Sword extends HeroDecorator {
    constructor(hero: IHero) {
        super(hero);
    }
    
    getAttack(): number {
        return this.hero.getAttack() + 7;
    }
    
    getDescription(): string {
        return `${this.hero.getDescription()} wielding Sharp Sword`;
    }
}

export class MagicStaff extends HeroDecorator {
    constructor(hero: IHero) {
        super(hero);
    }
    
    getAttack(): number {
        return this.hero.getAttack() + 2;
    }
    
    getMagic(): number {
        return this.hero.getMagic() + 8;
    }
    
    getDescription(): string {
        return `${this.hero.getDescription()} with Arcane Staff`;
    }
}

export class Shield extends HeroDecorator {
    constructor(hero: IHero) {
        super(hero);
    }
    
    getAttack(): number {
        return this.hero.getAttack() - 1;  
    }
    
    getDefense(): number {
        return this.hero.getDefense() + 6;
    }
    
    getDescription(): string {
        return `${this.hero.getDescription()} carrying Heavy Shield`;
    }
}