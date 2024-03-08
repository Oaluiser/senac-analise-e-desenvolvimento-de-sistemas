var input = require("fs").readFileSync("stdin", "utf8")
var lines = input.split("\n")

const len = lines[0]

for (let i = 0; i < len; i++) {
  let splitted = lines[i + 1].split(" ")
  let n1 = +splitted[0]
  let n2 = +splitted[1]
  let curr = 0
  let res = 0

  if (n1 % 2 === 0) {
    n1 += 1
  }
  curr = n1

  for (let j = 0; j < n2; j++) {
    res += curr
    curr += 2
  }

  console.log(res)
}
