// # 1. Percentage

let result = 17 / 30;
console.log(`${result} %`);

// another way -
//const grade = 17;
//const total = 30;
//const percent = (grade * 100) / total;
//console.log (`This is the result: ${percent}%`);


// # 2. Avarages

const workedHours = 8 + 6 + 5 + 9 + 8 + 2 + 1 + 7 + 4 + 8.5;
console.log("In the last two weeks she worked " + workedHours);
const workedAvarage = workedHours / 10; 
console.log("She worked " + workedAvarage + " per day.");

// another way -

//const workingHours = 8 + 6 + 5 + 9 + 8 + 2 + 1 + 7 + 4 + 8.5;
//const numberOfDays = 10;
//const avarageHours = workingHours / numberOfDays;
//console.log(`Noemy avarage working hour: ${avarageHours}`);


// # 3. Score 

const totalTestsAvg = 85;
const totalTestCount = 6;
const fiveTest = 75 + 70 + 85 + 90 + 100;
const sixthTest = (totalTestsAvg * totalTestCount) - fiveTest;
console.log(sixthTest);

// ## 4. Minimum Score

const currentNumbersExams = 8;
const currantAvarage = 78;
const totalPreFinalExam = currentNumbersExams * currantAvarage;
const totalNumberOfExams = 9;
const desiredAvarage = 80; 
const minumumResultNeeded = (desiredAvarage * totalNumberOfExams) - (totalPreFinalExam);
console.log(`James needs a minimum of ${minumumResultNeeded} to get an 80% average`);

// ## 5. Consumer formula

const billOne = 22.35;
const billTwo = 26.67;
const billThree = 35.92;

const tipPercentOne = (22.35 * 0.1);
const tipPercentTwo = (26.67 * 0.15);
const tipPercentThree = (35.92 * 0.20);

const billOneWithTip = billOne + tipPercentOne;
const billTwoWithTip = billTwo + tipPercentTwo;
const billThreeWithTip = billThree + tipPercentThree;

console.log(billOneWithTip);
console.log(billTwoWithTip);
console.log(billThreeWithTip);

// ## 6. Geometry Formulas

const sqSideLength = 4.75;
const sqSideCount = 4;
const perimeter = sqSideLength * sqSideCount;
console.log(perimeter);

const triSideLength1 = 5;
const triSideLength2 = 6;
const triSideLength3 = 7;
const triPerimeter = triSideLength1 + triSideLength2 + triSideLength3;
console.log(triPerimeter);

const sqSide = 5;
const sqArea = sqSide * sqSide;
console.log(sqArea);

const triS = (5 + 6 + 7) / 2;
const heron = triS *(triS - 5)*(triS - 6)*(triS - 7);
const triArea = Math.sqrt(heron);
console.log (triArea);

const cubeVol= 9 * 9 * 9;
console.log(cubeVol);

// ## 7. Basic word problems

const totalSales = 6450;
const ticketCost = 15;
const guestCount = totalSales / ticketCost;
console.log(guestCount);

const weeklyIncome = 500;
const weeksPerYear = 52;
const yearlyIncome = weeklyIncome * weeksPerYear;
console.log(yearlyIncome);






















