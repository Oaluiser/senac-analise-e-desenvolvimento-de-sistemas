const prompt = require("prompt-sync")()

let num = prompt("Nº Funcionários em 2023: ")

console.log("Previsão para os próximos 5 anos")
console.log("----------------------------------")

for (let i=0; i < 5; i++) {
    num = num*2
    console.log(`Em ${2024+i}: ${num} funcionários`)
}
