const input = require("fs").readFileSync("stdin", "utf8")
const lines = input.split("\n")

let split = lines[0].split(" ")
let beg = +split[0]
let fin = +split[1]
let res = 0

if (beg === fin) {
  console.log("O JOGO DUROU 24 HORA(S)")
} else {
  for (let i = beg; i != fin; i++) {
    res++

    if (i === 23) {
      i = -1
    }
  }
  console.log(`O JOGO DUROU ${res} HORA(S)`)
}
