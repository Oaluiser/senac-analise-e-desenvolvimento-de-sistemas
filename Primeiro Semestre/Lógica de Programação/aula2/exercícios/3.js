const prompt = require("prompt-sync")()

const valor = Number(prompt("Valor do veículo: "))
const entrada = valor / 2
const parcela = valor / 2 / 12
console.log(`Valor promocional, apenas ${entrada.toFixed(2)} de entrada, e o restante em 12x de ${parcela.toFixed(2)}`)