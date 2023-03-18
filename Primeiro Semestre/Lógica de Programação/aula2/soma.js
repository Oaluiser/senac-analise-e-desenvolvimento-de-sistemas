const prompt = require("prompt-sync")()

const num1 = Number(prompt("Primeiro Número: "))
const num2 = Number(prompt("Segundo número: "))
const sum =  num1 + num2
console.log(`A soma é ${sum}`)