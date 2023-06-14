const prompt = require("prompt-sync")()

let noticia = []

for (let i = 0; i < 10; i++) {
    const noticiaAtual = prompt(`${i+1}ª Notícia: `)
    noticia.push(noticiaAtual)
}

const quantidade = prompt("Quantas Notícias Exibir: ")

console.log("Últimas Notícias")
console.log("----------------")

for (let i=1; i<=quantidade; i++) {
    console.log(noticia[10-i])
}



