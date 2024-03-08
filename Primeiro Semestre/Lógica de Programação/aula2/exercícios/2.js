const prompt = require("prompt-sync")()

const consumido = Number(prompt("Valor Consumido: "))
const seraPago = consumido + consumido / 10
console.log(`Total a ser pago ${seraPago}`)
