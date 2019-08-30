function bandNameFunction(clothesColor, lastFood) {
  const firstInitial = clothesColor[0];
  const secondInitial = lastFood[0];
  const firstInitialUpperCase = firstInitial.toUpperCase();
  const secondInitialUpperCase = secondInitial.toUpperCase();

  const bandName = `The ${firstInitialUpperCase}${clothesColor.substring(
    1
  )} ${secondInitialUpperCase}${lastFood.substring(1)}!`;

  return bandName;
}
console.log(bandNameFunction("white", "chili con Carne"));
console.log(bandNameFunction("pink", "bread and Butter"));
console.log(bandNameFunction("blue", "scramble Eggs"));
