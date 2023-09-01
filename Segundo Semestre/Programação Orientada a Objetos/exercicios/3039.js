var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

let car = 0
let bon = 0

for (let i = 1; i <= lines[0]; i++) {
  const split = lines[i].split(" ")

  split[1] == "M" ? car++ : bon++
}

console.log(car + " carrinhos")
console.log(bon + " bonecas")