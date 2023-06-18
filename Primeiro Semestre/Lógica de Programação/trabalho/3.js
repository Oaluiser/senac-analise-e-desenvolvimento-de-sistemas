const prompt = require("prompt-sync")()

let numero = -1
let arr = []

while (numero != 0) {
    numero = Number(prompt("Número: "))

    if (numero % 2 != 0) {
        numero++
    }

    arr.push(numero)
    console.log(arr)
    console.log(numero)
}

console.log("Números (Ajustados)")
console.log("-----------------------------------")
for (let i = 0; i < arr.length-1; i++) {
    console.log(arr[i])
}