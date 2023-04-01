const prompt = require("prompt-sync")()

const numero = prompt("Número: ")
if (numero % 2 === 0) {
    console.log(`${numero} é par`)
} else {
    console.log(`${numero} é ímpar`)
}
