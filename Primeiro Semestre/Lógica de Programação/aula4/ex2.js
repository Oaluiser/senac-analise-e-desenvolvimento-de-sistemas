const prompt = require("prompt-sync")()

const produto = prompt("Produto: ")
const preco = Number(prompt("Preço: "))
const parcelas = preco / 3

console.log(`Produto: ${produto}`)
console.log(`Preço R$: ${preco.toFixed(2)}`)

if (preco < 100) {
  console.log(`Somente à vista`)
} else {
  console.log(`Pode pagar em 3x de ${parcelas.toFixed(2)}`)
}
