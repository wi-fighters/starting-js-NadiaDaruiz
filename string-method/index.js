// # 1. Characters and Properties

const data = "Today is Wednesday";
console.log(data.length);
const subStringData = data.substring(7,8);
const subStringData2 = data.substring(1,2)
console.log(subStringData,subStringData2);

// # 2. JS

const language = "JavaScript";
console.log(language.length);
console.log(language[0]+language[4]);

// # 3. I Can

const search = "I can walk in the park all day!"
const subStringSearch = search.substring(18,22);
console.log(subStringSearch);

// # 4. aSc

const aSc = "JavaScript" ;
const subsStringASc = aSc.substring(3,6);
console.log(subsStringASc);

// # 5. UpperCase

const uppers = "Hello World";
console.log(uppers.toUpperCase());

// # 6. LowerCase

const lower = "Hello Earthling";
console.log(lower.toLowerCase());

// # 7. Does it contain...?

const container = "nice shoes";
console.log(container.includes("l"));
console.log(container.includes("n"));

//# 8. Front & Back

const adding = "JavaScript";
console.log("J"+adding+"J");

// # 9. Last 3 chars

//const adding = "JavaScript";
const last = adding.substring(7,10);
console.log(last + adding + last);

// # 10. Java

const javi = "Javalin";
console.log(javi.toLocaleUpperCase(),javi.includes("Java"));

// # 11. First and last



// # 12. Concatenation

let firstName = "Nadia";
let lastName = "Daruiz";
let middleName = "Yael";
console.log(`${firstName} ${middleName} ${lastName}`);

// # 13. Capitalize

const sentence = "he quick brown fox";
const firstLetter = "t";
const phrase = (firstLetter.toUpperCase()) + sentence;
console.log(phrase);

