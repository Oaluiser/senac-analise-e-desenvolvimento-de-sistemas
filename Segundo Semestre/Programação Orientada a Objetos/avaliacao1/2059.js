var input = require("fs").readFileSync("stdin", "utf8")
var lines = input.split("\n")

let split = lines[0].split(" ")

let p = +split[0]
let j1 = +split[1]
let j2 = +split[2]
let r = +split[3]
let a = +split[4]

if (r === 1 && a === 1) {
  console.log("Jogador 2 ganha!")
} else if (r === 1 && a === 0) {
  console.log("Jogador 1 ganha!")
} else if (r === 0 && a === 1) {
  console.log("Jogador 1 ganha!")
} else if (r === 0 && a === 0) {
  if ((p === 1 && (j1 + j2) % 2 === 0) || (p === 0 && (j1 + j2) % 2 !== 0)) {
    console.log("Jogador 1 ganha!")
  } else {
    console.log("Jogador 2 ganha!")
  }
}
