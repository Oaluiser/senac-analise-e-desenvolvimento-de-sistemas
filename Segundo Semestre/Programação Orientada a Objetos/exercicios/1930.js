var input = require("fs").readFileSync("stdin", "utf8")
var lines = input.split("\n")

const arr = lines[0].split(" ")
let res = 0

for (let i = 0; i < 4; i++) {
  res = res + Number(arr[i])
}

console.log(res - 3)
