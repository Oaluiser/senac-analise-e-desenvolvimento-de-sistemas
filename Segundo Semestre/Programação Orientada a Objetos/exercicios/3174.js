var input = require("fs").readFileSync("stdin", "utf8")
var lines = input.split("\n")

let bon = 0
let arq = 0
let mus = 0
let des = 0

for (let i = 1; i <= lines[0]; i++) {
  const split = lines[i].split(" ")

  switch (split[1]) {
    case "bonecos":
      bon += +split[2]
      break
    case "arquitetos":
      arq += +split[2]
      break
    case "musicos":
      mus += +split[2]
      break
    case "desenhistas":
      des += +split[2]
      break
    default:
  }
}

console.log(
  Math.floor(bon / 8) +
    Math.floor(arq / 4) +
    Math.floor(mus / 6) +
    Math.floor(des / 12)
)
