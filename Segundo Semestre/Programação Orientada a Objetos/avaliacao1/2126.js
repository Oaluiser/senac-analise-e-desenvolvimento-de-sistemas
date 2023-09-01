var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

let caso = 0
const len = lines.length/2

for (let i = 0; i < len; i++) {
    caso++
    const n1 = lines[0]
    const n2 = lines[1]
    lines.shift()
    lines.shift()

    console.log("Caso #" + caso + ":")
    const qtd = n2.split(n1).length - 1
    const pos = n2.lastIndexOf(n1) + 1

    if (qtd > 0) {
        console.log("Qtd.Subsequencias: " + qtd)
        console.log("Pos: " + pos)
    } else {
        console.log("Nao existe subsequencia")
    }
    console.log()
}