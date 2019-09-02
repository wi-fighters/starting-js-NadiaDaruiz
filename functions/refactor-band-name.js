function capitalizeColor(clothesColor) {
  const toLowerCase = clothesColor[0] + clothesColor.substring(1).toLowerCase();
  return toLowerCase;
}
console.log(capitalizeColor("YeLlow"));

function capitalizeFood(lastFoodEaten) {
  let toLowerCase = lastFoodEaten[0].toUpperCase();
  toLowerCase += lastFoodEaten.substring(1).toLowerCase();
  return toLowerCase;
}

console.log(capitalizeFood("PIE"));
