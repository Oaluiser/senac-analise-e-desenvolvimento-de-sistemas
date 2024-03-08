const prompt = require("prompt-sync")()

const nome = prompt("Nome: ")
const idade = Number(prompt("Idade: "))
const anoDeNascimento = 2023 - idade
console.log(`O aluno ${nome} nasceu em ${anoDeNascimento}`)
