let bandArray = [];

function bandNameFunction(clothesColor, lastFood) {
  const firstInitial = clothesColor[0].toUpperCase();
  const secondInitial = lastFood[0].toUpperCase();

  const bandName = `The ${firstInitial}${clothesColor.substring(
    1
  )} ${secondInitial}${lastFood.substring(1)}!`;

  bandArray.push(bandName);

  return bandArray;
}

console.log(bandNameFunction("white", "chili"));
console.log(bandNameFunction("pink", "bread"));
console.log(bandNameFunction("blue", "eggs"));
