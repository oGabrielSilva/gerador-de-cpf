export default class Validate {
    constructor (cpf) {
        this.origins = cpf
        this.digit = Validate.val(cpf)
        this.digit2 = Validate.val(cpf + this.digit)
        this.cpf = Validate.formatted(cpf, this.digit, this.digit2)
    }

    static val(num) {
        let cpf = num.split('')
        for (let value in cpf) {
            cpf[value] = (cpf[value] * ((cpf.length + 1) - value))
        }
        cpf = cpf.reduce((acum, value) => acum + value, 0)
        cpf = (11 - (cpf % 11))
        return cpf > 9 ? '0' : String(cpf)
    }

    static formatted (int, digit, digit2) {
        const cpf = int.split('')
        let aux = ``
        for (let i = 0; i < cpf.length; i++) {
            aux += cpf[i]
            if(aux.length === 3) aux += '.' 
            if(aux.length === 7) aux += '.' 
            if(aux.length === 11) aux += '-' 
        }
        return aux += digit + digit2
    }
}