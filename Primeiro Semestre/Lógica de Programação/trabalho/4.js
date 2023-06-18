const prompt = require("prompt-sync")()

console.log("Informe o nome do jogador ou 'Fim' para sair")
console.log("-----------------------------------")
let jogadores = []
let idades = []
let jogadorAtual = ""
let somaIdades = 0


while (jogadorAtual != "Fim") {
    jogadorAtual = prompt("Jogador: ")
    jogadores.push(jogadorAtual)

    if (jogadorAtual != "Fim") {
        idades.push(Number(prompt("Idade: ")))
    }
}

for (let i = 0; i < idades.length; i++) {
    somaIdades = somaIdades + idades[i]
}

let media = somaIdades / idades.length

console.log(`Média das Idades: ${media}`)

console.log("Jogadores Mais Experientes")
console.log("-----------------------------------")

for (let i = 0; i < idades.length; i++) {
    if (idades[i] > media) {
        console.log(`${jogadores[i]} - ${idades[i]} anos`)
    }
}