var input = require("fs").readFileSync("stdin", "utf8")
var lines = input.split("\n")

const alphabet = "a b c d e f g h i j k l m n o p q r s t u v w x y z"
const arr = alphabet.split(" ")

for (let i = 0; i <= 25; i++) {
  console.log(`${i + 97} e ${arr[i]}`)
}
