const prompt = require("prompt-sync")()

const filme = prompt("Título do Filme: ")
const duracao = prompt("Duração: ")
console.log(`O filme ${filme} tem a duração de ${duracao}min.`)