let heroi = ['Richard Lionheart', 5500]

if (heroi[1] <= 1000) {
  console.log('O Herói ' + heroi[0] + ' está na classe **Ferro**')
} else if (heroi[1] > 1000 && heroi[1] <= 2000) {
  console.log('O Herói ' + heroi[0] + ' está na classe **Bronze**')
} else if (heroi[1] > 2000 && heroi[1] <= 6000) {
  console.log('O Herói ' + heroi[0] + ' está na classe **Prata**')
} else if (heroi[1] > 6000 && heroi[1] <= 7000) {
  console.log('O Herói ' + heroi[0] + ' está na classe **Ouro**')
} else if (heroi[1] > 7000 && heroi[1] <= 8000) {
  console.log('O Herói ' + heroi[0] + ' está na classe **Platina**')
} else if (heroi[1] > 8000 && heroi[1] <= 9000) {
  console.log('O Herói ' + heroi[0] + ' está na classe **Ascendente**')
} else if (heroi[1] > 9000 && heroi[1] <= 10000) {
  console.log('O Herói ' + heroi[0] + ' está na classe **Imortal**')
} else if (heroi[1] > 10000) {
  console.log('O Herói ' + heroi[0] + ' está na classe **Radiante**')
}
