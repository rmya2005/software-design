import { HeroBuilder } from './HeroBuilder';
import { EnemyBuilder } from './EnemyBuilder';

export class Director {
    constructCustomHero(builder: HeroBuilder): void {
        builder.reset()
            .setName("Luna Starlight")
            .setHeight(170)
            .setBuild("Agile")
            .setHairColor("Silver")
            .setEyeColor("Violet")
            .addClothes("Enchanted robe")
            .addClothes("Mystical boots")
            .addInventoryItem("Staff of wisdom")
            .addInventoryItem("Healing potion")
            .addInventoryItem("Ancient spellbook")
            .addSpecialAbility("Arcane magic")
            .addSpecialAbility("Time manipulation")
            .addSpecialAbility("Telepathy")
            .addGoodDeed("Restored a dying forest")
            .addGoodDeed("Protected village from monsters")
            .addGoodDeed("Taught orphans magic for self-defense");
    }

    constructCustomEnemy(builder: EnemyBuilder): void {
        builder.reset()
            .setName("Vortex the Devourer")
            .setHeight(210)
            .setBuild("Monstrous")
            .setHairColor("Flame-like")
            .setEyeColor("Pitch black")
            .addClothes("Armor of tortured souls")
            .addClothes("Cloak of shadows")
            .addInventoryItem("Soul-draining blade")
            .addInventoryItem("Orb of corruption")
            .addSpecialAbility("Soul absorption")
            .addSpecialAbility("Fear aura")
            .addSpecialAbility("Necromancy")
            .addEvilDeed("Destroyed an ancient civilization")
            .addEvilDeed("Corrupted a sacred forest")
            .addEvilDeed("Enslaved thousands of innocent people");
    }
}