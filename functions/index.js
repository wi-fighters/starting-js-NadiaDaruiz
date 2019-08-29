// # Intro to JavaScript: Arrays, Objects, Functions

// ## The Fortune Teller

/**
 * This is a fortune teller function.
 * Why pay a fortune teller when you can just program your fortune yourself?
 * 
 *@param {number} numberOfChildren 
 *@param {string} partneName
 *@param {string} geoLocation
 *@param {string} jobTitle

 *@return {string} fortune
 *
 * @example
 *
 *     tellFortune(2, 'Steve', 'Berlin', 'Web Dev') 
 */
// the function signature is  an instruction for how the func should be  called

function tellFortune(numberOfChildren, partnerName, geoLocation, jobTitle) {
  return `You will be a ${jobTitle} in ${geoLocation}, and married to 
    ${partnerName} with ${numberOfChildren} kids.`;
}

//tellFortune(2, 'Steve', 'Berlin', 'Web Dev')  // we think of the function call as "the user"

console.log(tellFortune(2, "Steve", "Berlin", "Web Dev")); // for calling the function
console.log(tellFortune(1, "Steve1", "San Francisco", "Marketing Manager"));
console.log(tellFortune(8, "Steve2", "Viedma", "Lawyer"));

// ## The Puppy Age Calculator

function calculateDogAge(humanAge, puppyAge) {
  return `Your doggie is ${humanAge * 7} years old in dog years!
    Or ${puppyAge / 7} in human years.`;
}
console.log(calculateDogAge(7, 14));

// ## The Lifetime Supply Calculator

function calculateSupply(age, amountPerDay) {
  const maxAge = 80;
  const amountPerYear = amountPerDay * 365;
  const restOfLife = maxAge - age;

  return `You will need ${amountPerYear * restOfLife} gr. of your fav snack 
  to last you until the ripe old age of ${maxAge}.`;
}
console.log(calculateSupply(38, 1));
console.log(calculateSupply(20, 1));
console.log(calculateSupply(70, 2));

// ## The Geometrizer

function calcCircumfrence(radius) {
  const circ = 2 * Math.PI * radius; // P = 2 * π * r -- form to calc the perimeter of a circ

  return `The circumference is ${circ}.`;
}
console.log(calcCircumfrence(10));
console.log(calcCircumfrence(15));
console.log(calcCircumfrence(20));

function calcArea(radius) {
  const area = Math.PI * radius * radius; // A = π * r2 -- form to calc the area of a circ

  return `The area is ${area}.`;
}
console.log(calcArea(10));
console.log(calcArea(15));
console.log(calcArea(20));

// ## The Temperature Converter

function celsiusToFahrenheit(celsius) {
  // T(°F) = T(°C) × 1.8 + 32 -- form to get celsius to fahrenheit conversion
  const celsiusRoundNum = Math.round(celsius * 1.8 + 32);
  return `${celsius}°C is ${celsiusRoundNum}°F.`;
}
console.log(celsiusToFahrenheit(35));
console.log(celsiusToFahrenheit(4));
console.log(celsiusToFahrenheit(-13));

function fahrenheitToCelsius(fahrenheit) {
  // T(°C) = (T(°F) - 32) / 1.8 -- form to get fahrenheit to celsius conversion
  const fahrenheitRoundNum = Math.round((fahrenheit - 32) / 1.8);
  return `${fahrenheit}°F is ${fahrenheitRoundNum}°C`;
}
console.log(fahrenheitToCelsius(72));
console.log(fahrenheitToCelsius(40));
console.log(fahrenheitToCelsius(15));
