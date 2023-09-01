var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

while (lines[0] !== "0") {
  const clients = lines.splice(1, lines[0])
  lines.shift()
  let vit = 0

  for (let i = 0; i < clients.length; i++) {
    const split = clients[i].split(" ")
    for (let j = 0; j < split[0]; j++) {
      switch (split[1]) {
        case "suco":
          vit += 120
          break;
        case "morango":
        case "mamao":
          vit += 85
          break;
        case "goiaba":
          vit += 70
          break;
        case "manga":
          vit += 56
          break;
        case "laranja":
          vit += 50
          break;
        case "brocolis":
          vit += 34
          break;
      }
    }
  }

  if (vit > 130) {
    console.log(`Menos ${vit-130} mg`)
  } else if (vit < 110) {
    console.log(`Mais ${110-vit} mg`)
  } else {
    console.log(`${vit} mg`)
  }
}