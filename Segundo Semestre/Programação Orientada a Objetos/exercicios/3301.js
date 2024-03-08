var input = require("fs").readFileSync("stdin", "utf8")
var lines = input.split("\n")

const split = lines[0].split(" ")

const h = +split[0]
const z = +split[1]
const l = +split[2]

const high = Math.max(h, z, l)
const low = Math.min(h, z, l)
const mid = h + z + l - high - low

if (h === mid) {
  console.log("huguinho")
} else if (z === mid) {
  console.log("zezinho")
} else {
  console.log("luisinho")
}
