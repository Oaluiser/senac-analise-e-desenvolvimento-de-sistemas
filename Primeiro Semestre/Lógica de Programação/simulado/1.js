const prompt = require("prompt-sync")()

const num = prompt("Número: ")
let arr = []
let sum = 0

for (let i = 0; i < num; i++) {
    if (num % i == 0) {
        arr.push(i)
    }
}

for (let i = 0; i < arr.length; i++) {
    console.log(arr[i])
    sum = sum+arr[i]
}

if (num == sum) {
    console.log(`${num} é um Número Perfeito`)
} else {
    console.log(`${num} não é um Número Perfeito`)
}