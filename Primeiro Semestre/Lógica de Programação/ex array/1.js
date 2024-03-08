const prompt = require("prompt-sync")()

const nomes = ["Silvana", "Juliano", "Ricardo", "Patrícia", "Bianca"]

const maiusculos = nomes.map((nome) => nome.toLocaleUpperCase())

console.log("Nomes: " + nomes.join(", "))
console.log("Destaques: " + maiusculos.join(", "))
