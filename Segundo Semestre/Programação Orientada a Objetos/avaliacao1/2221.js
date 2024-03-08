var input = require("fs").readFileSync("stdin", "utf8")
var lines = input.split("\n")

let t = +lines.shift()

for (let i = 0; i < t; i++) {
  const b = +lines.shift()
  let b1 = 0
  let b2 = 0
  const splitted1 = lines[0].split(" ")
  lines.shift()
  const a1 = +splitted1.shift()
  const d1 = +splitted1.shift()
  const l1 = +splitted1.shift()
  const splitted2 = lines[0].split(" ")
  lines.shift()
  const a2 = +splitted2.shift()
  const d2 = +splitted2.shift()
  const l2 = +splitted2.shift()

  if (l1 % 2 === 0) {
    b1 = b
  }

  if (l2 % 2 === 0) {
    b2 = b
  }

  const val1 = (a1 + d1) / 2 + b1
  const val2 = (a2 + d2) / 2 + b2

  if (val1 > val2) {
    console.log("Dabriel")
  } else if (val1 < val2) {
    console.log("Guarte")
  } else {
    console.log("Empate")
  }
}
