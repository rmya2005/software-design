import { Warrior, Mage, Paladin } from './heroes/BaseHeroes';
import { Helmet, ChestPlate, Boots } from './decorators/Armor';
import { Sword, MagicStaff, Shield } from './decorators/Weapons';
import { Amulet, Ring, Gloves } from './decorators/Artifacts';
import IHero from './IHero';

function displayHeroStats(hero: IHero): void {
    console.log('--------------------------------');
    console.log(hero.getDescription());
    console.log(`Type: ${hero.type}`);
    console.log(`Attack: ${hero.getAttack()}`);
    console.log(`Defense: ${hero.getDefense()}`);
    console.log(`Magic: ${hero.getMagic()}`);
    console.log('--------------------------------');
}

function main(): void {
    console.log("=== RPG Hero Inventory System ===\n");
    
    console.log("Base Heroes:");
    const warrior = new Warrior();
    const mage = new Mage();
    const paladin = new Paladin();
    
    displayHeroStats(warrior);
    displayHeroStats(mage);
    displayHeroStats(paladin);
    
    console.log("\nEquipped Warrior:");
    let equippedWarrior: IHero = new Sword(new Helmet(new ChestPlate(new Boots(warrior))));
    displayHeroStats(equippedWarrior);
    
    console.log("\nEquipped Mage:");
    let equippedMage: IHero = new MagicStaff(new Amulet(new Ring(mage)));
    displayHeroStats(equippedMage);
    
    console.log("\nEquipped Paladin:");
    let equippedPaladin: IHero = new Shield(new Sword(new ChestPlate(new Helmet(new Ring(paladin)))));
    displayHeroStats(equippedPaladin);
    
    console.log("\nWarrior with additional items:");
    equippedWarrior = new Gloves(new Ring(equippedWarrior));
    displayHeroStats(equippedWarrior);
}

main();