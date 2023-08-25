const input = require('fs').readFileSync('stdin', 'utf8');
const lines = input.split('\n');

let n = +lines[0]
let i = 0

if (n < 2000) {
  console.log("Isento")
} else {
  if (n < 3000) {
    i = (n - 2000) * 0.08
    console.log("R$ " + i.toFixed(2))
  } else if (n < 4500) {
    i = (n - 3000.01) * 0.18
    i = i + (999.99 * 0.08)
    console.log("R$ " + i.toFixed(2))
  } else {
    i = 999.99 * 0.08
    i = i + 1499.99 * 0.18
    i = i + ((n - 4500) * 0.28)
    console.log("R$ " + i.toFixed(2))
  }
}