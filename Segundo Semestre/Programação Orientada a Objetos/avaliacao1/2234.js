var input = require('fs').readFileSync('stdin', 'utf8')
var lines = input.split('\n')

let split = lines[0].split(' ')
n1 = split[0]
n2 = split[1]

console.log((n1/n2).toFixed(2))