import { HeroBuilder } from './HeroBuilder';
import { EnemyBuilder } from './EnemyBuilder';
import { Director } from './Director';

function testCharacterBuilders() {
    console.log('===== ТЕСТУВАННЯ БУДІВЕЛЬНИКІВ ПЕРСОНАЖІВ =====\n');
    
    const heroBuilder = new HeroBuilder();
    const enemyBuilder = new EnemyBuilder();
    const director = new Director();

    console.log("Створення героя мрії:");
    director.constructCustomHero(heroBuilder);
    const dreamHero = heroBuilder.getResult();
    console.log(dreamHero.getDescription());

    console.log("\nСтворення найзапеклішого ворога:");
    director.constructCustomEnemy(enemyBuilder);
    const archenemy = enemyBuilder.getResult();
    console.log(archenemy.getDescription());

    console.log("\nСтворення героя з використанням текучого інтерфейсу:");
    const customHero = new HeroBuilder()
        .setName("Elric the Wise")
        .setHeight(178)
        .setHairColor("White")
        .setEyeColor("Amber")
        .setBuild("Slender")
        .addClothes("Mage robe")
        .addInventoryItem("Magic wand")
        .addSpecialAbility("Elemental magic")
        .addGoodDeed("Saved a village from drought")
        .getResult();
    console.log(customHero.getDescription());

    console.log('\n===== ТЕСТУВАННЯ ЗАВЕРШЕНО =====');
}

testCharacterBuilders();