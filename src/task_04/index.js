var Virus = /** @class */ (function () {
    function Virus(weight, age, name, species, children) {
        if (children === void 0) { children = []; }
        this.weight = weight;
        this.age = age;
        this.name = name;
        this.species = species;
        this.children = children;
    }
    Virus.prototype.getWeight = function () { return this.weight; };
    Virus.prototype.setWeight = function (weight) { this.weight = weight; };
    Virus.prototype.getAge = function () { return this.age; };
    Virus.prototype.setAge = function (age) { this.age = age; };
    Virus.prototype.getName = function () { return this.name; };
    Virus.prototype.setName = function (name) { this.name = name; };
    Virus.prototype.getSpecies = function () { return this.species; };
    Virus.prototype.setSpecies = function (species) { this.species = species; };
    Virus.prototype.getChildren = function () { return this.children; };
    Virus.prototype.addChild = function (child) {
        this.children.push(child);
    };
    Virus.prototype.clone = function () {
        var clonedChildren = this.children.map(function (child) { return child.clone(); });
        return new Virus(this.weight, this.age, this.name, this.species, clonedChildren);
    };
    Virus.prototype.toString = function () {
        return "\u0412\u0456\u0440\u0443\u0441: ".concat(this.name, ", \u0412\u0438\u0434: ").concat(this.species, ", \u0412\u0456\u043A: ").concat(this.age, ", \u0412\u0430\u0433\u0430: ").concat(this.weight, ", \u041A\u0456\u043B\u044C\u043A\u0456\u0441\u0442\u044C \u0434\u0456\u0442\u0435\u0439: ").concat(this.children.length);
    };
    Virus.prototype.displayFamilyTree = function (indent) {
        if (indent === void 0) { indent = ""; }
        var result = "".concat(indent).concat(this.toString(), "\n");
        for (var _i = 0, _a = this.children; _i < _a.length; _i++) {
            var child = _a[_i];
            result += child.displayFamilyTree(indent + "  ");
        }
        return result;
    };
    return Virus;
}());
function testVirusCloning() {
    console.log('===== ТЕСТУВАННЯ КЛОНУВАННЯ ВІРУСІВ =====\n');
    var grandfather = new Virus(1.5, 10, "COVID-19", "Coronavirus");
    var father1 = new Virus(1.2, 5, "Delta", "Coronavirus");
    var father2 = new Virus(1.0, 4, "Alpha", "Coronavirus");
    grandfather.addChild(father1);
    grandfather.addChild(father2);
    var child1 = new Virus(0.8, 2, "Delta Plus", "Coronavirus");
    var child2 = new Virus(0.7, 1, "Delta Lite", "Coronavirus");
    father1.addChild(child1);
    father1.addChild(child2);
    var child3 = new Virus(0.9, 2, "Alpha Plus", "Coronavirus");
    father2.addChild(child3);
    console.log("Оригінальне сімейство вірусів:");
    console.log(grandfather.displayFamilyTree());
    var clonedGrandfather = grandfather.clone();
    console.log("\nПеревірка, що клонований вірус - це окремий об'єкт:");
    console.log("grandfather === clonedGrandfather: ".concat(grandfather === clonedGrandfather));
    clonedGrandfather.setName("COVID-19 Мутований");
    clonedGrandfather.setAge(11);
    console.log("\nКлоноване і модифіковане сімейство вірусів:");
    console.log(clonedGrandfather.displayFamilyTree());
    console.log("\nОригінальне сімейство вірусів (не змінилося):");
    console.log(grandfather.displayFamilyTree());
    console.log('\n===== ТЕСТУВАННЯ ЗАВЕРШЕНО =====');
}
testVirusCloning();
