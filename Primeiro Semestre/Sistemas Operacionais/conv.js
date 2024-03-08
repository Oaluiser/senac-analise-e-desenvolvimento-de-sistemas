let number = 87
let arr = []

while (number != 0) {
  if (number % 2 == 1) {
    arr.unshift(1)
    console.log("sobra 1")
  } else {
    if (number == 1) {
      arr.unshift(1)
      return console.log(arr)
    } else {
      arr.unshift(0)
      console.log("sobra 0")
    }
  }

  number = number / 2
  console.log(`numero: ${number}`)
}
