import IHero from "../IHero";

export abstract class HeroDecorator implements IHero {
    protected hero: IHero;
    
    constructor(hero: IHero) {
        this.hero = hero;
    }
    
    get type(): string {
        return this.hero.type;
    }
    
    getAttack(): number {
        return this.hero.getAttack();
    }
    
    getDefense(): number {
        return this.hero.getDefense();
    }
    
    getMagic(): number {
        return this.hero.getMagic();
    }
    
    getDescription(): string {
        return this.hero.getDescription();
    }
}