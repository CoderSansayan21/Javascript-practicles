// ## Q1: Undefined Variable 

// Declare the variable   
var age;

// Write what it stores  
console.log(age); // undefined

// Assign a number 
var age=10;

// Write new output  
console.log(age);   //10

// ## Q2: Increment  

let num=5;
// Apply `num++`  
num++;

// Write output  
console.log(num); //6

// Apply `++num`  
++num;

// Write output  
console.log(num); //7

//  Q3: Object Update  

// Create an object with name and age  
let person = {
  name: "Sansayan",
  age: 20
};

// Change age  
person.age = 21;

// Add city  
person.city = "Kilinochchi";

// Write final object  
console.log(person);


// ## Q4: Comparison  
let a = 10;
let b = "10";

// Write result of `a == b`  
console.log(a==b);  // true

// Write result of `a === b`  
console.log(a === b);  // false

//  Q5: Number Addition  

//  Store 25 and 5  
let x = 25;
let y = 5;

//  Add them  
let add = x+y;

// Write output  
console.log(add);   //30

// ## Q6: Array Update  
let items = ["pen", "book"];

// Add `"bag"`  
items.push("bag");

// Remove `"book"`  
items.splice(items.indexOf("book"), 1);

// Write final array  
console.log(items);

// ## Q7: Boolean Value  

// Store `false`  
let stat = false;
console.log(stat);    // false

// Change to `true`  
stat = true;
console.log(stat);  // true

// Q8: Arithmetic Order  

//  Write calculation `20 + 5 × 2`  
console.log(20 + 5 * 2);     

//  Write output 
// 30

// Change so addition happens first  
console.log((20 + 5) * 2); 

//  Write new output  
// 50

// ## Q9: Null Value  

// Create variable with `null`  
let value = null;
console.log(value);    

// Change it to a number  
value = 100;
console.log(value);

// Change it to a string  
value = "hello";
console.log(value);    

// Write outputs  
// null
// 100
// hello

// ## Q10: Nested Data 

//  Create object with name and subjects array  
let student = {
  name: "Sayan",
  subjects: ["Math", "Science"]
};

// Add one subject  
student.subjects.push("English");

// Access one subject  
console.log(student.subjects[1]); // Science

// Write output  
console.log(student);       

// ## Q11: Logical Operators  

let a1 = true;
let b1 = false;

// `a && b` 
console.log(a && b); // false

// `a || b`  
console.log(a || b); // true

// `!a`  
console.log(!a); // false

// ## Q12: String + Number 

// Store `"25"` and `5`  
let a3 = "25";
let b3 = 5;

// Add them  
console.log(a3 + b3); 

// Write output  
// "255"

// Change code so output becomes `30`  
console.log(Number(a) + b); // 30

// ## Q13: Primitive Copy  
let a4 = 10;
let b4 = a4;

//  Change `b` to 50  
b = 50;

// Write `a`  
console.log(a); // 10

//  Write `b`  
console.log(b); // 50

// ## Q14: Pass or Fail  

// Store marks  
let marks = 45;

// Write if/else  
if (marks >= 40) {
  console.log("Pass");
} else {
  console.log("Fail");
}

// ## Q15: Object Method  

// Create object with a function returning `"Hello"` 
let obj = {
  greet: function () {
    return "Hello";
  }
};

// Call it  
console.log(obj.greet()); // Hello

// Change to `"Hi"` 
obj.greet = function () {
  return "Hi";
};

//  Call again  
console.log(obj.greet()); // Hi

// ## Q16: Switch Statement  

// Store a number (1–3)  
let day = 2;

// Write switch for days  
switch (day) {
  case 1:
    console.log("Monday");
    break;

  case 2:
    console.log("Tuesday");
    break;

  case 3:
    console.log("Wednesday");
    break;

  default:
    console.log("Invalid input");
}

// Write output  
// Tuesday

// ## Q17: Invalid Calculation (NaN)  

//  Multiply `"hello"` with 2  
console.log("hello" * 2);

// Write output  
 // NaN

// Try another similar example  
console.log("hello" - 5); // NaN

// ## Q18: Age Check (Ternary)  

//  Store age  
let age1 = 18;

//  Use ternary
let result = (age1 >= 18) ? "Adult" : "Minor";

// Write output  
console.log(result);

// ## Q19: Nested Condition 

// Store marks  
let mark = 68;

// Write:
//    - ≥ 75 → A  
//    - ≥ 50 → B  
//    - else → C  
if (mark >= 75) {
  console.log("A");
} else if (mark >= 50) {
  console.log("B");
} else {
  console.log("C");
}

// Write output  
// B

// ## Q20: If Condition  
//  Store marks  
let markss = 55;

// Write:
//    - ≥ 50 → Pass  
//    - else → Fail 
if (marks >= 50) {
  console.log("Pass");
} else {
  console.log("Fail");
}

// Write output 
// Pass

// ## Q21: Array Method  

// Create array with two fruits  
let fruits = ["apple", "banana"];

// Add one using method  
fruits.push("mango");

// Remove first item  
fruits.shift();

// Write final array
console.log(fruits);

// ## Q22: Object Reference 

let obj1 = { value: 5 };
let obj2 = obj1;

// Change value  
obj2.value = 10;

// Write both outputs  
console.log(obj1.value); // 10
console.log(obj2.value); // 10

// ## Q23: Symbol Values  

// Create two symbols with same description  
let s1 = Symbol("id");
let s2 = Symbol("id");

// Compare them  
console.log(s1 === s2);

// Write result  
// false

// ## Q24: BigInt  

//  Create a BigInt value  
let a5 = 9007199254740991n;

// Add another BigInt  
let b5 = 10n;

//  Write output  
// 9007199254741001n

// Q25: Nested Array  

// Create nested array  
let data = [
  ["pen", "pencil"],
  ["book", "notebook"]
];

// Access one inner value  
console.log(data[0][1]); // pencil

// Access another value  
console.log(data[1][0]); // book

// Write outputs  
// data[0][1] pencil
// data[1][0] book

// Q26: Logical Condition 
//  Store age and ID status  
let age2 = 20;
let hasID = true;

// Allow entry only if both conditions are true  
if (age2 >= 18 && hasID) {
  console.log("Entry Allowed");
} else {
  console.log("Entry Denied");
};

// Write output 
// Entry Allowed

// ## Q27: Compare Objects  

// Create two objects with same values  
let obj3 = { name: "Sayan" };
let obj4 = { name: "Sayan" };

// Compare them  
console.log(obj1 === obj2);

//  Write result  
// false

// ## Q28: Temperature Check  

//  Store temperature 
let temp = 30;

// Write if/else  
if (temp > 35) {
  console.log("Hot");
} else {
  console.log("Normal");
}

// Write output 
// Normal

// ## Q29: Array Reference  

// Create array 
let arr1 = ["a", "b"];

//  Copy it 
let arr2 = arr1;

// Add value to second array 
arr2.push("c");

//  Write both arrays 
console.log(arr1);
console.log(arr2);

// ## Q30: String Formatting  

//  Store `"  kumar  "`  
let name = "  kumar  ";

// Remove spaces 
name = name.trim();

// Convert to uppercase  
name = name.toUpperCase();

//  Write final output 
console.log(name);