const prompt = require("prompt-sync")()

const modelo = prompt("Modelo: ")
const marca = prompt("Marca: ")
const preco = Number(prompt("Preço: "))
let desconto = preco * 0.2
if (marca === "Fiat") {
    desconto = preco * 0.1
} 

const vista = preco - desconto

console.log(`Modelo: ${modelo}`)
console.log(`Marca: ${marca}`)
console.log(`Preço R$: ${preco.toFixed(2)}`)
console.log(`Desconto: ${desconto.toFixed(2)}`)
console.log(`Preço à Vista: ${vista.toFixed(2)}`)