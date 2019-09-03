function bandName(clothesColor, lastFood) {
  let firstCap = "";

  const test = function(rawString) {
    return rawString[0].toUpperCase() + rawString.substr(1).toLowerCase();
  };

  const color = test(makeTasty(clothesColor));
  const food = test(lastFood);

  firstCap = `The ${color} ${food}`;
  return firstCap;
}
// Another way :
// function capitalizeInitial(rawString) {
// return rawString[0].toUpperCase() + rawString.substr(1).toLowerCase();

console.log(bandName("red", "KEBAB"));

function makeTasty(color) {
  let fruitColor = "";

  switch (color) {
    case "red":
    case "Red":
      return "chilli";
      break;
    case "orange":
    case "Orange":
      return "Tangerine";
      break;
    case "Yellow":
    case "yellow":
      return "Pineapple";
      break;
    case "Green":
    case "green":
      return "Sage";
      break;
    case "Blue":
    case "blue":
      return "Blueberry";
      break;
    case "Purple":
    case "purple":
      return "Plum";
  }

  return fruitColor;
}
console.log(makeTasty("blue"));
