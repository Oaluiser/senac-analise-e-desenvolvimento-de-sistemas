const prompt = require("prompt-sync")()

const nota1 = Number(prompt("Primeira nota: "))
const nota2 = Number(prompt("Segunda nota: "))
const media = (nota1 + nota2) / 2
console.log(`A média é ${media}`)
