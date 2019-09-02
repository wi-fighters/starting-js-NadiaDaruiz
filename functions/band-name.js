// // function bandNameFunction(clothesColor, lastFood) {
//   const firstInitial = clothesColor[0];
//   const secondInitial = lastFood[0];
//   const firstInitialUpperCase = firstInitial.toUpperCase();
//   const secondInitialUpperCase = secondInitial.toUpperCase();

//   const bandName = `The ${firstInitialUpperCase}${clothesColor.substring(
//     1
//   )} ${secondInitialUpperCase}${lastFood.substring(1)}!`;

//   return bandName;
// }
// console.log(bandNameFunction("white", "chili con carne"));
// console.log(bandNameFunction("pink", "bread and butter"));
// console.log(bandNameFunction("blue", "scramble eggs"));

// Here below a better and DRY code

function bandNameFunction(clothesColor, lastFood) {
  const firstInitial = clothesColor[0].toUpperCase();
  const secondInitial = lastFood[0].toUpperCase();

  const bandName = `The ${firstInitial}${clothesColor.substring(
    1
  )} ${secondInitial}${lastFood.substring(1)}!`;

  return bandName;
}
console.log(bandNameFunction("white", "chili con carne"));
console.log(bandNameFunction("pink", "bread and butter"));
console.log(bandNameFunction("blue", "scramble eggs"));
