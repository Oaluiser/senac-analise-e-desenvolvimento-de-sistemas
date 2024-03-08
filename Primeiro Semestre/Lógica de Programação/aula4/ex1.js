const prompt = require("prompt-sync")()

const aluno = prompt("Nome do Aluno: ")
const nascimento = Number(prompt("Ano de Nascimento: "))
const idade = 2023 - nascimento

console.log(`Nome do Aluno: ${aluno}`)
console.log(`Ano de Nascimento: ${nascimento}`)
console.log(`Idade: ${idade}`)

if (idade < 18) {
  console.log(`${aluno}, você é menor de idade`)
} else {
  console.log(`${aluno}, você é maior de idade`)
}
