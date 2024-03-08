const prompt = require("prompt-sync")()

const pesos = [75, 62.5, 89.8, 82.975, 61]
let pesosFormatados = []

for (let i = 0; i < pesos.length; i++) {
  pesosFormatados.push(`${pesos[i].toFixed(3)} kg`)
}

console.log(pesos)
console.log(pesosFormatados)

let nomes = [
  "Ana Clara",
  "Lucas",
  "Pedro",
  "José Paulo",
  "Sandra",
  "Luis Felipe",
  "Bruno",
]
let nomesCompostos = []

for (let i = 0; i < nomes.length; i++) {
  if (nomes[i].includes(" ")) {
    nomesCompostos.push(nomes[i])
  }
}

console.log(nomes)
console.log(nomesCompostos)
