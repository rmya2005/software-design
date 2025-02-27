interface IMoney {
    setMoney(arg0: number): void,
    Log():void
}

class Money implements IMoney {
    private intMoney: number = 0
    private floatMoney: number = 0


    setMoney(money: number){
        this.intMoney = Math.floor(money)
        this.floatMoney = Math.round((money - Math.floor(money)) * 100)

        if (this.floatMoney >= 100) {
            this.floatMoney %= 100
            this.intMoney += 1
        }
    }

    Log() {
        console.log(`Money ${this.intMoney},${this.floatMoney}`)
    }


}
export default new Money()