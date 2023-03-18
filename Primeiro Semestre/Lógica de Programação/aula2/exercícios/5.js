const prompt = require("prompt-sync")()

const num = Number(prompt("Número: "))
const anterior = num - 1
const posterior = num + 1
console.log(`O número anterior de ${num} é ${anterior}, já o posterior é ${posterior}.`)