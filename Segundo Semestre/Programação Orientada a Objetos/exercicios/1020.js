const input = require('fs').readFileSync('stdin', 'utf8');
const lines = input.split('\n');

let total = +lines[0]
let day = 0
let month = 0
let year = 0

while (total >= 365) {
  total -= 365
  year++
}

while (total >= 30) {
  total -= 30
  month++
}

while (total > 0) {
  total--
  day++
}

console.log(`${year} ano(s)`)
console.log(`${month} mes(es)`)
console.log(`${day} dia(s)`)