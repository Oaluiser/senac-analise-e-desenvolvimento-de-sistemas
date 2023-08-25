var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.trim().split('\n');

let split = lines[0].split("")
let mal = false

for (let i = 0; i < split.length; i++) {
  if (split[i] == 1 && split[i+1] == 3) {
    console.log(`${lines[0]} es de Mala Suerte`)
    mal = true
    return
  }
}

if (mal === false) {
  console.log(`${lines[0]} NO es de Mala Suerte`)
}