var input = require("fs").readFileSync("stdin", "utf8")
var lines = input.split("\n")

let time = +lines[0]
let hour = 0
let min = 0
let sec = 0

while (time > 3600) {
  time -= 3600
  hour += 1
}

while (time > 60) {
  time -= 60
  min += 1
}

sec = time

console.log(`${hour}:${min}:${sec}`)
