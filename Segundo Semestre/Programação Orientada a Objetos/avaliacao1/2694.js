var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

const length = lines.length
let regex = /[a-zA-z]/

for (let i = 1; i < length; i++) {
  console.log(lines[i].match(regex))
  console.log(lines[i].split(regex))
}