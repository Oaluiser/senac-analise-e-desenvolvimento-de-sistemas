var input = require("fs").readFileSync("stdin", "utf8")
var lines = input.split("\n")

while (lines.length > 0) {
  const vol = +lines.shift()
  const dia = +lines.shift()
  const altura = vol / (3.14 * (dia / 2) * (dia / 2))
  console.log(`ALTURA = ${altura.toFixed(2)}`)
  const area = (((3.14 * dia) / 2) * dia) / 2
  console.log(`AREA = ${area.toFixed(2)}`)
}
