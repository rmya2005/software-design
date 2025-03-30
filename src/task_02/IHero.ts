export default interface IHero {
    type: string;
    getAttack(): number;
    getDefense(): number;
    getMagic(): number;
    getDescription(): string;
}