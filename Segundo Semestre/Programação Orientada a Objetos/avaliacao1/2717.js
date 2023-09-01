var input = require('fs').readFileSync('stdin', 'utf8')
var lines = input.split('\n')

let n = +lines[0]
let split = lines[1].split(' ')
let a = +split[0]
let b = +split[1]
if ((a+b) > n) {
  console.log("Deixa para amanha!")
} else {
  console.log("Farei hoje!")
}
