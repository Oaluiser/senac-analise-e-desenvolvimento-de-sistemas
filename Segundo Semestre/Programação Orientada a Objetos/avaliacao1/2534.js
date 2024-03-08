var input = require("fs").readFileSync("stdin", "utf8")
var lines = input.split("\n")

const n = +lines[0][0]
const q = +lines[0][2]
lines.shift()
let arr = []

for (let i = 0; i < n; i++) {
  arr.push(+lines[0])
  lines.shift()
}
arr.sort((a, b) => b - a)

for (let i = 0; i < q; i++) {
  console.log(arr[+lines[i] - 1])
}
