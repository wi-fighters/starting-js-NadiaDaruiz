function bandName(clothesColor, lastFood) {
  let firstCap = "";

  const test = function(rawString) {
    return rawString[0].toUpperCase() + rawString.substr(1).toLowerCase();
  };

  const color = test(clothesColor);
  const food = test(lastFood);

  firstCap = `The ${color} ${food}`;
  return firstCap;
}
// function capitalizeInitial(rawString) {
// return rawString[0].toUpperCase() + rawString.substr(1).toLowerCase();

console.log(bandName("crimson", "KEBAB"));
