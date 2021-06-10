import './assets/css/master.css'
import CPF from './assets/modules/cpf'
import Validate from './assets/modules/validate'

const form = document.querySelector('form')
const output = form.querySelector('input')
const copy = form.querySelector('.copy')
let cpf;

function er() {
    console.warn('CPF invalid - new one generated')
    generatorCpf()
}

function generatorCpf() {
    cpf = new Validate(CPF.generator())
    if(cpf.cpf.length !== 14) return er()
    output.value = cpf.cpf    
    const btn = form.querySelector('button')
    setCopied(btn, 'copied')
}

function setCopied(body, value) {
    body.classList.add(value)
    setTimeout(() => body.classList.remove(value), 300)
}

function copyCPF() {
    navigator.clipboard.writeText(output.value)
    setCopied(copy, 'copied')
}

form.addEventListener('submit', e => {
    e.preventDefault()
    generatorCpf()
})

copy.addEventListener('click', copyCPF)
