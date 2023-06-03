const prompt = require("prompt-sync")()

const salarios = [2300, 3000, 1900, 4500, 2550, 2800]
console.log(salarios.join(", "))

const minimo = prompt("Valor Mínimo: ")

const pesquisa = salarios.filter(obj => obj >= minimo)

if (pesquisa.length == 0) {
    console.log("Não existe")
} else {
    console.log("Maiores ou Iguais: " + pesquisa.join(", "))
}