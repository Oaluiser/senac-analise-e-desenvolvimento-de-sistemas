const prompt = require("prompt-sync")()

const numero = Number(prompt("Numero: "))
let aposta = -1
let errouFeio = 0
let quase = 0

console.log(`Apostas`)
console.log("-----------------------------------")

while (aposta != numero) {
    const nome = prompt("Nome: ")
    aposta = Number(prompt("Aposta: "))

    if (aposta == numero) {
        console.log("Acertou!!")
        console.log("-----------------------------------")
        console.log(`Erraram Feio: ${errouFeio}`)
        console.log(`Quase: ${quase}`)
    } else if (numero - aposta >= 10 || aposta - numero >= 10) {
        console.log("Voçê errou feio...")
        errouFeio++
    } else {
        console.log("Quase...")
        quase++
    }
}