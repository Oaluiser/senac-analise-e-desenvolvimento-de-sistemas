var input = require("fs").readFileSync("stdin", "utf8")
var lines = input.split("\n")

let num = 0
let res = 1

for (let i = 2; i <= 100; i++) {
  num = 1 / i
  res += num
}

console.log(res.toFixed(2))
