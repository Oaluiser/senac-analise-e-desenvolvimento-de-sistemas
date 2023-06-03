const prompt = require("prompt-sync")()

const nomes = ["Silvana", "Juliano", "Ricardo", "Patrícia", "Bianca"]
console.log(nomes.join(", "))

const nome = prompt("Pesquisar: ")

const pesquisa = nomes.filter(obj => obj == nome)

if (pesquisa.length == 0) {
    console.log("Não consta na lista")
} else {
    console.log(`Consta na ${ nomes.indexOf(pesquisa[0]) + 1 }ª posição`)
}