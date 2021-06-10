export default class CPF {
    constructor (number) {
        this.number = number
    }

    static generator() {
        return String(Math.floor(Math.random() * 1000000000))
    }
}
