// ### Exercise: Level 1
// ```js
// const countries = [
//   'Albania',
//   'Bolivia',
//   'Canada',
//   'Denmark',
//   'Ethiopia',
//   'Finland',
//   'Germany',
//   'Hungary',
//   'Ireland',
//   'Japan',
//   'Kenya'
// ]

// const webTechs = [
//   'HTML',
//   'CSS',
//   'JavaScript',
//   'React',
//   'Redux',
//   'Node',
//   'MongoDB'
// ]
// ```

// 1. Declare an _empty_ array;
let arr = [];

// 2. Declare an array with more than 5 number of elements
let numbers = [10, 20, 30, 40, 50, 60];

// 3. Find the length of your array
console.log(numbers.length);

// 4. Get the first item, the middle item and the last item of the array
console.log(numbers[0]);

let middle = numbers[Math.floor(numbers.length / 2)];
console.log(middle);

console.log(numbers[numbers.length - 1]);

// 5. Declare an array called _mixedDataTypes_, put different data types in the array and find the length of the array. The array size should  be greater than 5
let mixedDataTypes = [1, "hello", true, null, undefined, {a:1}, [1,2,3]];

console.log(mixedDataTypes.length);

// 6. Declare an array variable name itCompanies and assign initial values Facebook, Google, Microsoft, Apple, IBM, Oracle and Amazon
let itCompanies = ["Facebook", "Google", "Microsoft", "Apple", "IBM", "Oracle", "Amazon"];

// 7. Print the array using _console.log()_
console.log(itCompanies);

// 8. Print the number of companies in the array
console.log(itCompanies.length);

// 9. Print the first company, middle and last company
console.log(itCompanies[0]);

console.log(itCompanies[Math.floor(itCompanies.length / 2)]);

console.log(itCompanies[itCompanies.length - 1]);

// 10. Print out each company
for (let company of itCompanies) {
  console.log(company);
}

// 11. Change each company name  to uppercase one by one and print them out
for (let company of itCompanies) {
  console.log(company.toUpperCase());
}

// 12. Print the array like as a sentence: Facebook, Google, Microsoft, Apple, IBM,Oracle and Amazon are big IT companies.
console.log(`${itCompanies.join(", ")} are big IT companies.`);

// 13. Check if a certain company exists in the itCompanies array. If it exist return the company else return a company is _not found_
let company = "Google";

if (itCompanies.includes(company)) {
  console.log(company);
} else {
  console.log("Company is not found");
}

// 14. Filter out companies which have more than one 'o' without the filter method
for (let company of itCompanies) {
  let count = 0;

  for (let char of company.toLowerCase()) {
    if (char === "o") {
      count++;
    }
  }

  if (count > 1) {
    console.log(company);
  }
}

// 15. Sort the array using _sort()_ method
console.log(itCompanies.sort());

// 16. Reverse the array using _reverse()_ method
console.log(itCompanies.reverse());

// 17. Slice out the first 3 companies from the array
console.log(itCompanies.slice(0, 3));

// 18. Slice out the last 3 companies from the array
console.log(itCompanies.slice(-3));

// 19. Slice out the middle IT company or companies from the array
let mid = Math.floor(itCompanies.length / 2);

console.log(itCompanies[mid]);

// 20. Remove the first IT company from the array
itCompanies.shift();
console.log(itCompanies);

// 21. Remove the middle IT company or companies from the array
let mid = Math.floor(itCompanies.length / 2);
itCompanies.splice(mid, 1);

console.log(itCompanies);

// 22. Remove the last IT company from the array
itCompanies.pop();
console.log(itCompanies);

// 23. Remove all IT companies
itCompanies.length = 0;
console.log(itCompanies); 

// ### Exercise: Level 2
// 1.Create a separate countries.js file and store the countries array in to this file, create a separate file web_techs.js and store the webTechs array in to this file. Access both file in main.js file
import { countries } from './countries.js';
import { webTechs } from './web_techs.js';

console.log(countries);
console.log(webTechs);

// 2.First remove all the punctuations and change the string to array and count the number of words in the array
//  ```js
//     let text =
//     'I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.'
//     console.log(words)
//     console.log(words.length)
//     ```

//     ```sh
//     ["I", "love", "teaching", "and", "empowering", "people", "I", "teach", "HTML", "CSS", "JS", "React", "Python"]
  
//     13
   
let text =
'I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.'

let words = text.replace(/[.,]/g, '').split(' ')

console.log(words)
console.log(words.length)

//3. In the following shopping cart add, remove, edit items ```
//  ```js
//     const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey']
//     ```

//    - add 'Meat' in the beginning of your shopping cart if it has not been already added
//    - add Sugar at the end of you shopping cart if it has not been already added
//    - remove 'Honey' if you are allergic to honey
//    - modify Tea to 'Green Tea'

const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey']

if (!shoppingCart.includes('Meat')) {
  shoppingCart.unshift('Meat')
}

if (!shoppingCart.includes('Sugar')) {
  shoppingCart.push('Sugar')
}

let honeyIndex = shoppingCart.indexOf('Honey')
if (honeyIndex !== -1) {
  shoppingCart.splice(honeyIndex, 1)
}

let teaIndex = shoppingCart.indexOf('Tea')
if (teaIndex !== -1) {
  shoppingCart[teaIndex] = 'Green Tea'
}

console.log(shoppingCart)

// 4.In countries array check if 'Ethiopia' exists in the array if it exists print 'ETHIOPIA'. If it does not exist add to the countries list.

const countries = ['Albania','Bolivia','Canada','Denmark','Ethiopia','Finland','Germany','Hungary','Ireland','Japan','Kenya']

if (countries.includes('Ethiopia')) {
  console.log('ETHIOPIA')
} else {
  countries.push('Ethiopia')
}

console.log(countries)

//5. In the webTechs array check if Sass exists in the array and if it exists print 'Sass is a CSS preprocess'. If it does not exist add Sass to the array and print the array.

const webTechs = ['HTML','CSS','JavaScript','React','Redux','Node','MongoDB']

if (webTechs.includes('Sass')) {
  console.log('Sass is a CSS preprocess')
} else {
  webTechs.push('Sass')
}

console.log(webTechs)

//6. Concatenate the following two variables and store it in a fullStack variable.
// ```js
//     const frontEnd = ['HTML', 'CSS', 'JS', 'React', 'Redux']
//     const backEnd = ['Node','Express', 'MongoDB']
  
//     console.log(fullStack)
//     ```

//     ```sh
//     ["HTML", "CSS", "JS", "React", "Redux", "Node", "Express", "MongoDB"]
//     ```
const frontEnd = ['HTML', 'CSS', 'JS', 'React', 'Redux']
const backEnd = ['Node','Express', 'MongoDB']

const fullStack = frontEnd.concat(backEnd)

console.log(fullStack)




// ### Exercise: Level 3
// The following is an array of 10 students ages:
const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24]

// Sort the array and find the min and max age
let sortedAges = ages.sort((a, b) => a - b)
console.log(sortedAges)

let min = sortedAges[0]
let max = sortedAges[sortedAges.length - 1]

console.log("Min:", min)
console.log("Max:", max)

// Find the median age
//  ```js
//     const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24]
//     ```

//     - Sort the array and find the min and max age
//     - Find the median age(one middle item or two middle items divided by two)
//     - Find the average age(all items divided by number of items)
//     - Find the range of the ages(max minus min)
//     - Compare the value of (min - average) and (max - average), use _abs()_ method
let middle = Math.floor(sortedAges.length / 2)

let median =
  sortedAges.length % 2 === 0
    ? (sortedAges[middle - 1] + sortedAges[middle]) / 2
    : sortedAges[middle]

console.log("Median:", median)

// Find average age
let sum = 0
for (let age of sortedAges) {
  sum += age
}

let average = sum / sortedAges.length
console.log("Average:", average)

// Find range
let range = max - min
console.log("Range:", range)

// Compare (min - average) and (max - average)
console.log(Math.abs(min - average))
console.log(Math.abs(max - average))

// Slice the first ten countries from the countries array
const countries = [
  'Albania','Bolivia','Canada','Denmark','Ethiopia',
  'Finland','Germany','Hungary','Ireland','Japan',
  'Kenya','India','USA'
]

let firstTen = countries.slice(0, 10)
console.log(firstTen)

// Find the middle country(ies)
const countries = [
  'Albania','Bolivia','Canada','Denmark','Ethiopia',
  'Finland','Germany','Hungary','Ireland','Japan','Kenya'
]

let middleIndex = Math.floor(countries.length / 2)

if (countries.length % 2 === 0) {
  console.log(countries[middleIndex - 1], countries[middleIndex])
} else {
  console.log(countries[middleIndex])
}

// Divide countries into two equal arrays
const countries = [
  'Albania','Bolivia','Canada','Denmark','Ethiopia',
  'Finland','Germany','Hungary','Ireland','Japan','Kenya'
]

let middle = Math.ceil(countries.length / 2)

let firstHalf = countries.slice(0, middle)
let secondHalf = countries.slice(middle)

console.log(firstHalf)
console.log(secondHalf)


// ### Exercises: Level 4

//   ```js
//   const countries = [
//     'Albania',
//     'Bolivia',
//     'Canada',
//     'Denmark',
//     'Ethiopia',
//     'Finland',
//     'Germany',
//     'Hungary',
//     'Ireland',
//     'Japan',
//     'Kenya'
//   ]

//   const webTechs = [
//     'HTML',
//     'CSS',
//     'JavaScript',
//     'React',
//     'Redux',
//     'Node',
//     'MongoDB'
//   ]

//   const mernStack = ['MongoDB', 'Express', 'React', 'Node']

// Iterate 0 to 10 using for loop, do the same using while and do while loop

for (let i = 0; i <= 10; i++) {
  console.log(i);
}

let i = 0;
while (i <= 10) {
  console.log(i);
  i++;
}

let j = 0;
do {
  console.log(j);
  j++;
} while (j <= 10);

// Iterate 10 to 0 using for loop, do the same using while and do while loop

for (let i = 10; i >= 0; i--) {
  console.log(i);
}

let i = 10;
while (i >= 0) {
  console.log(i);
  i--;
}

let j = 10;
do {
  console.log(j);
  j--;
} while (j >= 0);

// Iterate 0 to n using for loop

let n = 10;

for (let i = 0; i <= n; i++) {
  console.log(i);
}

// Write a loop that makes the following pattern using console.log()

   ```js
       #
       ##
       ###
       ####
       #####
       ######
       #######
   ```

for (let i = 1; i <= 7; i++) {
  console.log("#".repeat(i));
}

// Use loop to print the following pattern
 ```sh
   0 x 0 = 0
   1 x 1 = 1
   2 x 2 = 4
   3 x 3 = 9
   4 x 4 = 16
   5 x 5 = 25
   6 x 6 = 36
   7 x 7 = 49
   8 x 8 = 64
   9 x 9 = 81
   10 x 10 = 100
   ```

for (let i = 0; i <= 10; i++) {
  console.log(i + " x " + i + " = " + i * i);
}

// Using loop print the following pattern
 ```sh
    i    i^2   i^3
    0    0     0
    1    1     1
    2    4     8
    3    9     27
    4    16    64
    5    25    125
    6    36    216
    7    49    343
    8    64    512
    9    81    729
    10   100   1000
   ```

console.log("i    i^2   i^3");

for (let i = 0; i <= 10; i++) {
  console.log(i + "    " + (i * i) + "     " + (i * i * i));
}


// Use for loop to iterate from 0 to 100 and print only even numbers

for (let i = 0; i <= 100; i++) {
  if (i % 2 === 0) {
    console.log(i);
  }
}

// Use for loop to iterate from 0 to 100 and print only odd numbers

for (let i = 0; i <= 100; i++) {
  if (i % 2 !== 0) {
    console.log(i);
  }
}

// Use for loop to iterate from 0 to 100 and print only prime numbers

for (let i = 2; i <= 100; i++) {
  let isPrime = true;

  for (let j = 2; j < i; j++) {
    if (i % j === 0) {
      isPrime = false;
      break;
    }
  }

  if (isPrime) {
    console.log(i);
  }
}

// Use for loop to iterate from 0 to 100 and print the sum of all numbers.

    // ```sh
    // The sum of all numbers from 0 to 100 is 5050.
    // ```

let sum = 0;

for (let i = 0; i <= 100; i++) {
  sum += i;
}

console.log("The sum of all numbers from 0 to 100 is " + sum + ".");

// Use for loop to iterate from 0 to 100 and print the sum of all evens and the sum of all odds.

let even = 0;
let odd = 0;

for (let i = 0; i <= 100; i++) {
  if (i % 2 === 0) {
    even += i;
  } else {
    odd += i;
  }
}

console.log(
  "The sum of all evens from 0 to 100 is " +
    even +
    ". And the sum of all odds from 0 to 100 is " +
    odd +
    "."
);


// Use for loop to iterate from 0 to 100 and print the sum of all evens and the sum of all odds. Print sum of evens and sum of odds as array

let even = 0;
let odd = 0;

for (let i = 0; i <= 100; i++) {
  if (i % 2 === 0) {
    even += i;
  } else {
    odd += i;
  }
}

console.log([even, odd]);


// ### Exercises: Level 5

// 1. Develop a small script which generate any number of characters random id:

//     ```sh
//       fe3jo1gl124g
//     ```

//     ```sh
//       xkqci4utda1lmbelpkm03rba
//     ```

let length = Math.floor(Math.random() * 20) + 6;
let chars = "abcdefghijklmnopqrstuvwxyz0123456789";
let id = "";

for (let i = 0; i < length; i++) {
  id += chars[Math.floor(Math.random() * chars.length)];
}

console.log(id);


// 2. Write a script which generates a random hexadecimal number.

//     ```sh
//     '#ee33df'
//     ```

let hex = "#";
let hexChars = "0123456789abcdef";

for (let i = 0; i < 6; i++) {
  hex += hexChars[Math.floor(Math.random() * 16)];
}

console.log(hex);

// 3. Write a script which generates a random rgb color number.

//     ```sh
//     rgb(240,180,80)
//     ```

let r = Math.floor(Math.random() * 256);
let g = Math.floor(Math.random() * 256);
let b = Math.floor(Math.random() * 256);

console.log(`rgb(${r},${g},${b})`);

// 4. Using the above countries array, create the following new array.

//     ```sh
//     ["ALBANIA", "BOLIVIA", "CANADA", "DENMARK", "ETHIOPIA", "FINLAND", "GERMANY", "HUNGARY", "IRELAND", "JAPAN", "KENYA"]
//     ```
let upperCountries = countries.map(c => c.toUpperCase());
console.log(upperCountries);

// 5. Using the above countries array, create an array for countries length'.

//     ```sh
//     [7, 7, 6, 7, 8, 7, 7, 7, 7, 5, 5]
//     ```
let lengths = countries.map(c => c.length);
console.log(lengths);

// 6. Use the countries array to create the following array of arrays:

//     ```sh
//       [
//       ['Albania', 'ALB', 7],
//       ['Bolivia', 'BOL', 7],
//       ['Canada', 'CAN', 6],
//       ['Denmark', 'DEN', 7],
//       ['Ethiopia', 'ETH', 8],
//       ['Finland', 'FIN', 7],
//       ['Germany', 'GER', 7],
//       ['Hungary', 'HUN', 7],
//       ['Ireland', 'IRE', 7],
//       ['Iceland', 'ICE', 7],
//       ['Japan', 'JAP', 5],
//       ['Kenya', 'KEN', 5]
//     ]
//     ```
// 6.
let arr = countries.map(c => [c, c.slice(0,3).toUpperCase(), c.length]);
console.log(arr);

// 7. In above countries array, check if there is a country or countries containing the word 'land'. If there are countries containing 'land', print it as array. If there is no country containing the word 'land', print 'All these countries are without land'.

//     ```sh
//     ['Finland','Ireland', 'Iceland']
//     ```

// 8. In above countries array, check if there is  a country or countries end with a substring 'ia'. If there are countries end with, print it as array. If there is no country containing the word 'ai', print 'These are countries ends without ia'.

//     ```sh
//     ['Albania', 'Bolivia','Ethiopia']
//     ```

// 9. Using the above countries array, find the country containing the biggest number of characters.

//       ```sh
//       Ethiopia
//       ```

// 10. Using the above countries array, find the country containing only 5 characters.

//     ```sh
//     ['Japan', 'Kenya']
//     ```
// 11. Find the longest word in the webTechs array
// 12. Use the webTechs array to create the following array of arrays:

//     ```sh
//     [["HTML", 4], ["CSS", 3],["JavaScript", 10],["React", 5],["Redux", 5],["Node", 4],["MongoDB", 7]]
//     ```

// 13. An application created using MongoDB, Express, React and Node is called a MERN stack app. Create the acronym MERN by using the array mernStack
// 14. Iterate through the array, ["HTML", "CSS", "JS", "React", "Redux", "Node", "Express", "MongoDB"] using a for loop or for of loop and print out the items.
// 15. This is a fruit array , ['banana', 'orange', 'mango', 'lemon'] reverse the order using loop without using a reverse method.
// 16. Print all the elements of array as shown below.

//     ```js
//       const fullStack = [
//         ['HTML', 'CSS', 'JS', 'React'],
//         ['Node', 'Express', 'MongoDB']
//       ]
//     ````

//     ```sh
//       HTML
//       CSS
//       JS
//       REACT
//       NODE
//       EXPRESS
//       MONGODB
//     ```


// ### Exercises: Level 6


// 1. Copy countries array(Avoid mutation)
let countriesCopy = [...countries];
console.log(countriesCopy);

// 2. Arrays are mutable. Create a copy of array which does not modify the original. Sort the copied array and store in a variable sortedCountries

let sortedCountries = [...countries].sort();
console.log(sortedCountries);

// 3. Sort the webTechs array and mernStack array
console.log(webTechs.sort());
console.log(mernStack.sort());

// 4. Extract all the countries contain the word 'land' from the [countries array](/countries.js) and print it as array

let landCountries = countries.filter(c => c.toLowerCase().includes("land"));
console.log(landCountries);

// 5. Find the country containing the hightest number of characters in the [countries array](/countries.js)
// 5.
let longest = "";

for (let c of countries) {
  if (c.length > longest.length) {
    longest = c;
  }
}

console.log(longest);

// 6. Extract all the countries contain the word 'land' from the [countries array](/countries.js) and print it as array

let landCountries = countries.filter(c => c.toLowerCase().includes("land"));
console.log(landCountries);

// 7. Extract all the countries containing only four characters from the [countries array](/countries.js) and print it as array

let fourCharCountries = countries.filter(c => c.length === 4);
console.log(fourCharCountries);

// 8. Extract all the countries containing two or more words from the [countries array](/countries.js) and print it as array

let multiWordCountries = countries.filter(c => c.includes(" "));
console.log(multiWordCountries);

// 9. Reverse the [countries array](/countries.js) and capitalize each country and stored it as an array

let reversedCaps = [...countries]
  .reverse()
  .map(c => c.toUpperCase());

console.log(reversedCaps);