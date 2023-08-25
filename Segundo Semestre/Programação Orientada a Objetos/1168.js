var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.trim().split('\n');


for (let i = 1; i <= lines[0]; i++) {
  let res = 0
  
  for (let j = 0; j < lines[i].length; j++) {
    let split = lines[i].split("")

    switch(split[j]) {
      case "1":
        res += 2;
        break;
      case "2":
        res += 5;
        break;
      case "3":
        res += 5;
        break;
      case "4":
        res += 4;
        break;
      case "5":
        res += 5;
        break;
      case "6":
        res += 6;
        break;
      case "7":
        res += 3;
        break;
      case "8":
        res += 7;
        break;
      case "9":
        res += 6;
        break;
      case "0":
        res += 6;
        break;
    }
  }
  console.log(res + " leds")
}