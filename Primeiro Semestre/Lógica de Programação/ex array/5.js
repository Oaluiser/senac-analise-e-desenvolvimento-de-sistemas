const prompt = require("prompt-sync")()

const preco = [40000, 50000, 32000, 60000, 45000]

console.log(preco.join(", "))

const entrada = preco.map((obj) => obj * 0.3)

console.log(entrada.join(", "))
