const prompt = require("prompt-sync")()

const cidade1 = prompt("Primeira cidade: ")
const cidade2 = prompt("Segunda cidade:")
const distancia = prompt("Distância")

console.log(`A distância entre ${cidade1} e ${cidade2} é de ${distancia}km.`)