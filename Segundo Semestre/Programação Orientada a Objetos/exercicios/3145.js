var input = require("fs").readFileSync("stdin", "utf8")
var lines = input.split("\n")

const data = lines[0].split(" ")
const n = +data[0]
const x = +data[1]

console.log((x / (n + 2)).toFixed(2))
