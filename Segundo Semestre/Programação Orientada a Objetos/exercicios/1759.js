var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

let number = +lines[0]
let res = []

while (number > 0) {
    if (number == 1) {
        res.push("Ho!")
    } else {
        res.push("Ho")
    }
    number--
}

console.log(res.join(" "))