import { Character } from './Character';

export interface ICharacterBuilder {
    reset(): ICharacterBuilder;
    setName(name: string): ICharacterBuilder;
    setHeight(height: number): ICharacterBuilder;
    setBuild(build: string): ICharacterBuilder;
    setHairColor(color: string): ICharacterBuilder;
    setEyeColor(color: string): ICharacterBuilder;
    addClothes(item: string): ICharacterBuilder;
    addInventoryItem(item: string): ICharacterBuilder;
    addSpecialAbility(ability: string): ICharacterBuilder;
    getResult(): Character;
}