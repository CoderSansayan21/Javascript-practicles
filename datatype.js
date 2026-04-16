// Create datatypes.js file and use the JavaScript **_typeof_** operator to check different data types. Check the data type of each variable
let name = "Sayan";
let isStudent = true;
let age;
let x = null;

console.log(typeof name);      // string
console.log(typeof isStudent); // boolean
console.log(typeof age);         // undefined
console.log(typeof x);         // object (JS behavior)

// ### Exercise: Level 3
// Q1
console.log("The quote 'There is no exercise better for the heart than reaching down and lifting people up.' by John Holmes teaches us to help one another.");

// Q2
console.log("\"Love is not patronizing and charity isn't about pity, it is about love. Charity and love are the same -- with charity you give love, so don't just give money but reach out your hand instead.\"");

// Q3
console.log(typeof '10' === typeof 10); // false
console.log(Number('10') === 10); // true

// Q4
console.log(parseFloat('9.8') === 10); // false
console.log(Math.round(parseFloat('9.8')) === 10); // true

// Q5
console.log("python".includes("on") && "jargon".includes("on")); // true

// Q6
let sentence = "I hope this course is not full of jargon";
console.log(sentence.includes("jargon")); // true

// Q7 (0–100)
console.log(Math.floor(Math.random() * 101));

// Q8 (50–100)
console.log(Math.floor(Math.random() * 51) + 50);

// Q9 (0–255)
console.log(Math.floor(Math.random() * 256));

// Q10
let str = "JavaScript";
let randomIndex = Math.floor(Math.random() * str.length);
console.log(str[randomIndex]);

// Q11
console.log("1 1 1 1 1\n2 1 2 4 8\n3 1 3 9 27\n4 1 4 16 64\n5 1 5 25 125");

// Q12
let text = "You cannot end a sentence with because because because is a conjunction";
let start = text.indexOf("because because because");
console.log(text.substr(start, 23));