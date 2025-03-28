import { Character } from './Character';
import { ICharacterBuilder } from './ICharacterBuilder';

export class HeroBuilder implements ICharacterBuilder {
    private character: Character;

    constructor() {
        this.character = new Character();
        this.character.setType("Hero");
    }

    reset(): HeroBuilder {
        this.character = new Character();
        this.character.setType("Hero");
        return this;
    }

    setName(name: string): HeroBuilder {
        this.character.setName(name);
        return this;
    }

    setHeight(height: number): HeroBuilder {
        this.character.setHeight(height);
        return this;
    }

    setBuild(build: string): HeroBuilder {
        this.character.setBuild(build);
        return this;
    }

    setHairColor(color: string): HeroBuilder {
        this.character.setHairColor(color);
        return this;
    }

    setEyeColor(color: string): HeroBuilder {
        this.character.setEyeColor(color);
        return this;
    }

    addClothes(item: string): HeroBuilder {
        this.character.addClothes(item);
        return this;
    }

    addInventoryItem(item: string): HeroBuilder {
        this.character.addInventoryItem(item);
        return this;
    }

    addSpecialAbility(ability: string): HeroBuilder {
        this.character.addSpecialAbility(ability);
        return this;
    }

    // Специфічний метод для героя
    addGoodDeed(deed: string): HeroBuilder {
        this.character.addGoodDeed(deed);
        return this;
    }

    getResult(): Character {
        return this.character;
    }
}