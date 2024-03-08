var input = require("fs").readFileSync("stdin", "utf8")
var lines = input.split("\n")

const splitted = lines[0].split(" ")
const a = +splitted[0]
const b = +splitted[1]
const c = +splitted[2]
const d = +splitted[3]

if (b > c && d > a && c + d > a + b && c + d >= 0 && a + b >= 0 && a % 2 == 0) {
  console.log("Valores aceitos")
} else {
  console.log("Valores nao aceitos")
}
