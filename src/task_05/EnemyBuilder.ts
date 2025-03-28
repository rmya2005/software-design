import { Character } from './Character';
import { ICharacterBuilder } from './ICharacterBuilder';

export class EnemyBuilder implements ICharacterBuilder {
    private character: Character;

    constructor() {
        this.character = new Character();
        this.character.setType("Enemy");
    }

    reset(): EnemyBuilder {
        this.character = new Character();
        this.character.setType("Enemy");
        return this;
    }

    setName(name: string): EnemyBuilder {
        this.character.setName(name);
        return this;
    }

    setHeight(height: number): EnemyBuilder {
        this.character.setHeight(height);
        return this;
    }

    setBuild(build: string): EnemyBuilder {
        this.character.setBuild(build);
        return this;
    }

    setHairColor(color: string): EnemyBuilder {
        this.character.setHairColor(color);
        return this;
    }

    setEyeColor(color: string): EnemyBuilder {
        this.character.setEyeColor(color);
        return this;
    }

    addClothes(item: string): EnemyBuilder {
        this.character.addClothes(item);
        return this;
    }

    addInventoryItem(item: string): EnemyBuilder {
        this.character.addInventoryItem(item);
        return this;
    }

    addSpecialAbility(ability: string): EnemyBuilder {
        this.character.addSpecialAbility(ability);
        return this;
    }

    // Специфічний метод для ворога
    addEvilDeed(deed: string): EnemyBuilder {
        this.character.addEvilDeed(deed);
        return this;
    }

    getResult(): Character {
        return this.character;
    }
}