// ### Exercises: Level 1

// Write a single line comment which says, _comments can make code readable_
// comments can make code readable

// Write another single comment which says, _Welcome to learn Javascript_
// Welcome to learn Javascript

// Write a multiline comment which says, _comments can make code readable, easy to reuse_
//    _and informative_
/*
comments can make code readable,
easy to reuse and informative
*/

// Declare four variables without assigning values
let a;
let b;
let c;
let d;

// Declare four variables with assigned values
let m = 10;
let n = "hello";
let p = true;
let q = null;

//  Declare variables to store your first name, last name, marital status, country and age in multiple lines
let firstName = "sansayan";
let lastName = "Tharmaradnam";
let maritalStatus = "Single";
let country = "Sri Lanka";
let age = 20;

// Declare variables to store your first name, last name, marital status, country and age in a single line
let firstName = "Sayan", lastName = "Kumar", maritalStatus = "Single", country = "Sri Lanka", age = 20;

// Declare two variables _myAge_ and _yourAge_ and assign them initial values and log to the browser console.
let myAge = 20;
let yourAge = 25;

console.log("My age is", myAge);
console.log("Your age is", yourAge);

// ### Exercises: Level 2

//Q1
let challenge = "learn Javascript";

// Q2
console.log(challenge);

// Q3
console.log(challenge.length);

// Q4
console.log(challenge.toUpperCase());

// Q5
console.log(challenge.toLowerCase());

// Q6 (cut first word)
console.log(challenge.substr(6)); 
// or
console.log(challenge.substring(6));

// Q7 (slice out "Javascript")
console.log(challenge.substr(6));

// Q8
console.log(challenge.includes("Script"));

// Q9
console.log(challenge.split(""));

// Q10
console.log(challenge.split(" "));

// Q11
let companies = "Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon";
console.log(companies.split(", "));

// Q12
console.log(challenge.replace("Javascript", "30 Days Of Python"));

// Q13
console.log(challenge.charAt(15));

// Q14
console.log(challenge.charCodeAt(6)); // J

// Q15
console.log(challenge.indexOf("a"));

// Q16
console.log(challenge.lastIndexOf("a"));

// Q17
let sentence = "You cannot end a sentence with because because because is a conjunction";
console.log(sentence.indexOf("because"));

// Q18
console.log(sentence.lastIndexOf("because"));

// Q19
console.log(sentence.search("because"));

// Q20
console.log("  learn Javascript  ".trim());

// Q21
console.log(challenge.startsWith("learn"));

// Q22
console.log(challenge.endsWith("Javascript"));

// Q23
console.log(challenge.match(/a/g));

// Q24
console.log("30 Days of".concat(" ", "JavaScript"));

// Q25
console.log(challenge.repeat(2));

