const prompt = require("prompt-sync")()

const nome = prompt("Fruta: ")
const quant = prompt("Quantidade: ")
console.log(`Foram colhidas ${quant} unidades de ${nome}`)
