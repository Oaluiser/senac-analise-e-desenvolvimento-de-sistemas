var input = require("fs").readFileSync("stdin", "utf8")
var lines = input.split("\n")

let n = +lines[0]

console.log(((n + 1) * (n + 2)) / 2)
