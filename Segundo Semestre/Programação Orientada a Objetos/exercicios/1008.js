const input = require("fs").readFileSync("stdin", "utf8")
const lines = input.split("\n")

const n = +lines[0]
const h = +lines[1]
const s = +lines[2]

console.log(`NUMBER = ${n}`)
console.log(`SALARY = U$ ${(h * s).toFixed(2)}`)
