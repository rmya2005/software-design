"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var BaseHeroes_1 = require("./heroes/BaseHeroes");
var Armor_1 = require("./decorators/Armor");
var Weapons_1 = require("./decorators/Weapons");
var Artifacts_1 = require("./decorators/Artifacts");
function displayHeroStats(hero) {
    console.log('--------------------------------');
    console.log(hero.getDescription());
    console.log("Type: ".concat(hero.type));
    console.log("Attack: ".concat(hero.getAttack()));
    console.log("Defense: ".concat(hero.getDefense()));
    console.log("Magic: ".concat(hero.getMagic()));
    console.log('--------------------------------');
}
function main() {
    console.log("=== RPG Hero Inventory System ===\n");
    console.log("Base Heroes:");
    var warrior = new BaseHeroes_1.Warrior();
    var mage = new BaseHeroes_1.Mage();
    var paladin = new BaseHeroes_1.Paladin();
    displayHeroStats(warrior);
    displayHeroStats(mage);
    displayHeroStats(paladin);
    console.log("\nEquipped Warrior:");
    var equippedWarrior = new Weapons_1.Sword(new Armor_1.Helmet(new Armor_1.ChestPlate(new Armor_1.Boots(warrior))));
    displayHeroStats(equippedWarrior);
    console.log("\nEquipped Mage:");
    var equippedMage = new Weapons_1.MagicStaff(new Artifacts_1.Amulet(new Artifacts_1.Ring(mage)));
    displayHeroStats(equippedMage);
    console.log("\nEquipped Paladin:");
    var equippedPaladin = new Weapons_1.Shield(new Weapons_1.Sword(new Armor_1.ChestPlate(new Armor_1.Helmet(new Artifacts_1.Ring(paladin)))));
    displayHeroStats(equippedPaladin);
    console.log("\nWarrior with additional items:");
    equippedWarrior = new Artifacts_1.Gloves(new Artifacts_1.Ring(equippedWarrior));
    displayHeroStats(equippedWarrior);
}
main();
