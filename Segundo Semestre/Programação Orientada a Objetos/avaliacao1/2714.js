var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

let len = lines.length

for (let i = 1; i < len; i++) {
    let split = lines[i].split("")
    if (split[0] === "R" && split[1] === "A" && split.length === 20) {
        split.shift()
        split.shift()
        while (split[0] === "0") {
            split.shift()
        }
        if (split.length !== 0) {
            console.log(split.join(""))
        } else {
            console.log("INVALID DATA")
        }
    } else {
        console.log("INVALID DATA")
    }
}