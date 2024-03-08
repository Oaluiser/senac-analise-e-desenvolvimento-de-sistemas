const prompt = require("prompt-sync")()

const palavra = prompt("Palavra: ")
const num = Number(prompt("Número: "))

let res = ""
for (let i = num; i > 0; i--) {
  res += `${palavra} * `
}
console.log(res)
