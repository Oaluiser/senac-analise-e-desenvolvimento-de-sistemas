const prompt = require("prompt-sync")()

let cliente = []
let idade = []

for (let i = 0; i < 10; i++) {
  const clienteAtual = prompt(`${i + 1}ª Cliente: `)
  cliente.push(clienteAtual)

  const idadeAtual = prompt("Idade: ")
  idade.push(idadeAtual)
}

const quantidade = prompt("Quantas Notícias Exibir: ")

console.log("Últimas Notícias")
console.log("----------------")

for (let i = 1; i <= quantidade; i++) {
  console.log(noticia[10 - i])
}
