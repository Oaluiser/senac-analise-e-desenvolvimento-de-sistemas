const prompt = require("prompt-sync")()


const num = Number(prompt("Número: "))

let res = `Seguintes ao ${num}: `
for (let i = num; i < (num+10); i++) {
    if (num+9 == i) {
        res += `${i+1}. `
    } else {
        res += `${i+1}, `
    }
}
console.log(res)