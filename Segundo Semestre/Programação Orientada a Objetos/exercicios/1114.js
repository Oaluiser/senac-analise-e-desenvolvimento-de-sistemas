var input = require("fs").readFileSync("/dev/stdin", "utf8")
var lines = input.split("\n")

let i = 0
let pass = ""

while (pass != 2002) {
  pass = lines[i]
  if (pass == 2002) {
    console.log("Acesso Permitido")
  } else {
    console.log("Senha Invalida")
  }
  i++
}
