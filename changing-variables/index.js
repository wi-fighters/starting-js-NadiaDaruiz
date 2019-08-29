// #1
let name = "Nadia";
console.log(name);

// #2
// ##opc a
console.log(`Schm${name}`);

// ##opc b
const add = "Schm";
console.log(add + name);

// #3
// The value of name didn't change. Even if I add a new variable or use string interpolation.

// #4
name = "Yael";
console.log(name);

// #5
let coffee = 1;

// #6
console.log(`${name} drinks ${coffee} cup of coffee per day.`);

// #7
let daysBeforeExam = 10;

// #8
console.log(`${name} drinks ${coffee} cup of coffee per day 
with ${daysBeforeExam} days before the exam.`);

// #9
coffee += 1;
daysBeforeExam -= 1;
console.log(`${name} is drinking ${coffee} more cups of coffee, 
with ${daysBeforeExam} days before the exam.`);

// #10
console.log(coffee, daysBeforeExam);
// += and -=  will reassign the variable and do the mathematical operation at the same time.

// #12
const schmozzler = "schm";

// #13
console.log(name + schmozzler);

// #14
console.log(name);
// the concat doesn't change the variable value
