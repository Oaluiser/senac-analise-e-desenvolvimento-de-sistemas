const input = require("fs").readFileSync("stdin", "utf8")
const lines = input.split("\n")

const m = +lines[0]
const a = +lines[1]
const b = +lines[2]
const c = m - a - b

console.log(Math.max(a, b, c))
