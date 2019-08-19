// #Name Analyzer exercise

// ## 1
const welcome ="Hello";
const firstName = "Winston"; 
const firstLetter = firstName.substring(0,1);
const lastletter = firstName.substring (6);
const funnyName = "Winschmoo";

console.log(`${welcome}, ${firstName}. 
Your name is ${firstName.length} letters long.
The first letter of your name is ${firstLetter} and the last one is ${lastletter}.
If I want to be funny, I will call you ${funnyName}.`);

// ## 2

const welcome ="Hello";
const fullName = " Winston Churchill "; 
const trimName = fullName.trim (); 
const firstLetter = trimName.substring(0,1);
const lastletter = trimName.substring (6,7);
const funnyName = "Winschmoo";

console.log(`${welcome}, ${fullName}. 
Your name is ${fullName.length} letters long.
The first letter of your name is ${firstLetter} and the last one is ${lastletter}.
If I want to be funny, I will call you ${funnyName}.`);
