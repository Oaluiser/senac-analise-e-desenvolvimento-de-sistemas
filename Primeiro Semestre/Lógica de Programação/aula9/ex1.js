const prompt = require("prompt-sync")()

const produto = prompt("Produto: ")
const preco = Number(prompt("Preço R$: "))

console.log("Opções de Pagamento")
console.log("---------------")

for (let i = 1; i < 10; i++) {
  const parcela = preco / i
  console.log(`${i} x ${parcela.toFixed(2)}`)
}
