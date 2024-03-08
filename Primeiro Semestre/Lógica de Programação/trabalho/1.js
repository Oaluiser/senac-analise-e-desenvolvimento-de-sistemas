const prompt = require("prompt-sync")()

const produto = prompt("Produto: ")
const preco = Number(prompt("Preço R$: "))

console.log(`Promoção de Aniversário: ${produto}`)
console.log("-----------------------------------")

for (let i = 1; i <= 10; i++) {
  const desconto = preco - (preco * i * 5) / 100
  console.log(
    `${i} Unidade(s): ${desconto.toFixed(2)} cada (${i * 5}% de desconto)`
  )
}
