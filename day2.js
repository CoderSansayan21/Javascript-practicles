// Exercises: Level 1

// 1. Declare firstName, lastName, country, city, age, isMarried, year variable and assign value to it and use the typeof operator to check different data types.
let firstName = "Sansayan";
let lastName = "Tharmaradnam";
let country = "Sri Lanka";
let city = "Kilinochchi";
let age = 21;
let isMarried = false;
let year = 2026;

console.log(typeof firstName);   
// string
console.log(typeof lastName);    
// string
console.log(typeof country);    
 // string
console.log(typeof city);        
// string
console.log(typeof age);        
 // number
console.log(typeof isMarried);   
// boolean
console.log(typeof year);        
// number

// 2. Check if type of '10' is equal to 10
console.log(typeof '10' == typeof 10); // false

// 3. Check if parseInt('9.8') is equal to 10
console.log(parseInt('9.8') == 10); // false

// 4. Boolean value is either true or false.
// 1. Write three JavaScript statement which provide truthy value.
console.log(1);        
console.log("sayan");  
console.log(true);     
// 2. Write three JavaScript statement which provide falsy value.
console.log(0);       
console.log("");       
console.log(null);

// 5. Figure out the result of the following comparison expression first without using console.log(). After you decide the result confirm it using console.log()
console.log(4 > 3);     // true
console.log(4 >= 3);    // true
console.log(4 < 3);     // false
console.log(4 <= 3);    // false
console.log(4 == 4);    // true
console.log(4 === 4);   // true
console.log(4 != 4);    // false
console.log(4 !== 4);   // false
console.log(4 != '4');  // false
console.log(4 == '4');  // true
console.log(4 === '4'); // false
// Find the length of python and jargon and make a falsy comparison statement.
let a = "python".length;
let b = "jargon".length; 
console.log(a == b); // true
console.log(a != b); // false

// 6. Figure out the result of the following expressions first without using console.log(). After you decide the result confirm it by using console.log()
console.log(4 > 3 && 10 < 12);   // true
console.log(4 > 3 && 10 > 12);   // false
console.log(4 > 3 || 10 < 12);   // true
console.log(4 > 3 || 10 > 12);   // true
console.log(!(4 > 3));           // false
console.log(!(4 < 3));           // true
console.log(!(false));           // true
console.log(!(4 > 3 && 10 < 12)); // false
console.log(!(4 > 3 && 10 > 12)); // true
console.log(!(4 === '4'));       // true
console.log(!('dragon'.includes('on') && 'python'.includes('on'))); // false

// 7. Use the Date object to do the following activities
let now = new Date();

console.log(now.getFullYear());        // 2026
console.log(now.getMonth() + 1);       // 4 
console.log(now.getDate());            // 18
console.log(now.getDay());             // 6
console.log(now.getHours());           // 11
console.log(now.getMinutes());         // 25
console.log(Math.floor(now.getTime() / 1000));//1776582535

// ### Exercises: Level 2
// 1. Write a script that prompt the user to enter base and height of the triangle and calculate an area of a triangle (area = 0.5 x b x h).

//    ```sh
//    Enter base: 20
//    Enter height: 10
//    The area of the triangle is 100
//    ```
let base = prompt("Enter base:");
let height = prompt("Enter height:");

let area = 0.5 * base * height;

console.log("The area of the triangle is " + area);

// 2. Write a script that prompt the user to enter side a, side b, and side c of the triangle and and calculate the perimeter of triangle (perimeter = a + b + c)

//    ```sh
//    Enter side a: 5
//    Enter side b: 4
//    Enter side c: 3
//    The perimeter of the triangle is 12
//    ```
let a = Number(prompt("Enter side a:"));
let b = Number(prompt("Enter side b:"));
let c = Number(prompt("Enter side c:"));

let perimeter = a + b + c;

console.log("The perimeter of the triangle is " + perimeter);

// 3. Get length and width using prompt and calculate an area of rectangle (area = length x width and the perimeter of rectangle (perimeter = 2 x (length + width))
let length = Number(prompt("Enter length:"));
let width = Number(prompt("Enter width:"));

let area = length * width;
let perimeter = 2 * (length + width);

console.log("Area: " + area);
console.log("Perimeter: " + perimeter);

// 4. Get radius using prompt and calculate the area of a circle (area = pi x r x r) and circumference of a circle(c = 2 x pi x r) where pi = 3.14.
let r = Number(prompt("Enter radius:"));
let pi = 3.14;

let area = pi * r * r;
let circumference = 2 * pi * r;

console.log("Area: " + area);
console.log("Circumference: " + circumference);

// 5. Calculate the slope, x-intercept and y-intercept of y = 2x -2
let slope = 2;
let yIntercept = -2;
let xIntercept = 1; // because 0 = 2x - 2 → x = 1

console.log("Slope:", slope);
console.log("Y-intercept:", yIntercept);
console.log("X-intercept:", xIntercept);

// 6. Slope is m = (y<sub>2</sub>-y<sub>1</sub>)/(x<sub>2</sub>-x<sub>1</sub>). Find the slope between point (2, 2) and point(6,10)
let x1 = 2
let y1 = 2;
let x2 = 6
let y2 = 10;

let slope = (y2 - y1) / (x2 - x1);

console.log("Slope:", slope);

// 7. Compare the slope of above two questions.
// Both slopes equal

// 8. Calculate the value of y (y = x<sup>2</sup> + 6x + 9). Try to use different x values and figure out at what x value y is 0.
let x = Number(prompt("Enter x:"));
let y = x*x + 6*x + 9;
console.log("y =", y);

// 9. Writ a script that prompt a user to enter hours and rate per hour. Calculate pay of the person?
    // ```sh
    // Enter hours: 40
    // Enter rate per hour: 28
    // Your weekly earning is 1120
    // ```
let hours = Number(prompt("Enter hours:"));
let rate = Number(prompt("Enter rate per hour:"));
let pay = hours * rate;
console.log("Your weekly earning is " + pay);

// 10. If the length of your name is greater than 7 say, your name is long else say your name is short.
let name = prompt("Enter your name:");
if (name.length > 7) {
  console.log("Your name is long");
} else {
  console.log("Your name is short");
}

// 11. Compare your first name length and your family name length and you should get this output.

//     ```js
//     let firstName = 'kamal'
//     let lastName = 'ranvir'
//     ```

//     ```sh
//     Your first name, kamal is longer than your family name, ranvir
//     ```

let firstName = "kamal";
let lastName = "ranvir";

if (firstName.length > lastName.length) {
  console.log(`Your first name, ${firstName} is longer than your family name, ${lastName}`);
} else {
  console.log(`Your family name, ${lastName} is longer than your first name, ${firstName}`);
}


// 12. Declare two variables _myAge_ and _yourAge_ and assign them initial values and myAge and yourAge.

//    ```js
//    let myAge = 25
//    let yourAge = 25
//    ```

//    ```sh
//    I am 50 years older than you.
//    ```
let myAge = 25;
let yourAge = 25;

let diff = myAge + yourAge;

console.log(`I am ${diff} years older than you.`);

// 13. Using prompt get the year the user was born and if the user is 18 or above allow the user to drive if not tell the user to wait a certain amount of years.

//     ```sh

//     Enter birth year: 1995
//     You are 25. You are old enough to drive

//     Enter birth year: 2005
//     You are 15. You will be allowed to drive after 3 years.
//     ```

let birthYear = Number(prompt("Enter birth year:"));
let currentYear = new Date().getFullYear();

let age = currentYear - birthYear;

if (age >= 18) {
  console.log(`You are ${age}. You are old enough to drive`);
} else {
  console.log(`You are ${age}. You will be allowed to drive after ${18 - age} years.`);
}

// 14. Write a script that prompt the user to enter number of years. Calculate the number of seconds a person can live. Assume some one lives just hundred years

//    ```sh
//    Enter number of years you live: 100
//    You lived 3153600000 seconds.
//    ```
let years = Number(prompt("Enter number of years you live:"));

let seconds = years * 365 * 24 * 60 * 60;

console.log(`You lived ${seconds} seconds.`);

// 15. Create a human readable time format using the Date time object
//    1. YYYY-MM-DD HH:mm
//    2. DD-MM-YYYY HH:mm
//    3. DD/MM/YYYY HH:mm

let now = new Date();

let year = now.getFullYear();
let month = now.getMonth() + 1;
let date = now.getDate();
let hours = now.getHours();
let minutes = now.getMinutes();

// 1. YYYY-MM-DD HH:mm
console.log(`${year}-${month}-${date} ${hours}:${minutes}`);

// 2. DD-MM-YYYY HH:mm
console.log(`${date}-${month}-${year} ${hours}:${minutes}`);

// 3. DD/MM/YYYY HH:mm
console.log(`${date}/${month}/${year} ${hours}:${minutes}`);

// ### Exercises: Level 3
// 1. Create a human readable time format using the Date time object. The hour and the minute should be all the time two digits(7 hours should be 07 and 5 minutes should be 05 )
//    1. YYY-MM-DD HH:mm eg. 20120-01-02 07:05
let now = new Date();

let year = now.getFullYear();
let month = String(now.getMonth() + 1).padStart(2, "0");
let date = String(now.getDate()).padStart(2, "0");

let hours = String(now.getHours()).padStart(2, "0");
let minutes = String(now.getMinutes()).padStart(2, "0");

console.log(`${year}-${month}-${date} ${hours}:${minutes}`);

// ### Exercises: Level 4
// 1. Get user input using prompt(“Enter your age:”). If user is 18 or older , give feedback:'You are old enough to drive' but if not 18 give another feedback stating to  wait for the number of years he needs to turn 18.

//    ```sh
//    Enter your age: 30
//    You are old enough to drive.

//    Enter your age:15
//    You are left with 3 years to drive.
//    ```
let age = Number(prompt("Enter your age:"));

if (age >= 18) {
  console.log("You are old enough to drive.");
} else {
  console.log(`You are left with ${18 - age} years to drive.`);
}

// 2. Compare the values of myAge and yourAge using if … else. Based on the comparison and log the result to console stating who is older (me or you). Use prompt(“Enter your age:”) to get the age as input.

//    ```sh
//    Enter your age: 30
//    You are 5 years older than me.
//    ```
let myAge = 25;
let yourAge = Number(prompt("Enter your age:"));

if (yourAge > myAge) {
  console.log(`You are ${yourAge - myAge} years older than me.`);
} else if (yourAge < myAge) {
  console.log(`I am ${myAge - yourAge} years older than you.`);
} else {
  console.log("We are same age.");
}

// 3. If a is greater than b return 'a is greater than b' else 'a is less than b'. Try to implement it in to ways

//     - using if else
//     - ternary operator.

//     ```js
//       let a = 4
//       let b = 3
//     ```

//     ```sh
//       4 is greater than 3
//     ```
let a = 4;
let b = 3;

if (a > b) {
  console.log(`${a} is greater than ${b}`);
} else {
  console.log(`${a} is less than ${b}`);
}

// 4. Even numbers are divisible by 2 and the remainder is zero. How do you check, if a number is even or not using JavaScript?

//     ```sh
//     Enter a number: 2
//     2 is an even number

//     Enter a number: 9
//     9 is is an odd number.
//     ```
let num = Number(prompt("Enter a number:"));

if (num % 2 === 0) {
  console.log(`${num} is an even number`);
} else {
  console.log(`${num} is an odd number`);
}

// ### Exercises: Level 5
// 1. Write a code which  can give grades to students according to theirs scores:
//    - 80-100, A
//    - 70-89, B
//    - 60-69, C
//    - 50-59, D
//    - 0-49, F
let score = Number(prompt("Enter your score:"));

if (score >= 80 && score <= 100) {
  console.log("Grade: A");
} else if (score >= 70 && score <= 79) {
  console.log("Grade: B");
} else if (score >= 60 && score <= 69) {
  console.log("Grade: C");
} else if (score >= 50 && score <= 59) {
  console.log("Grade: D");
} else {
  console.log("Grade: F");
}

// 2. Check if the season is Autumn, Winter, Spring or Summer.
//    If the user input is :
//    - September, October or November, the season is Autumn.
//    - December, January or February, the season is Winter.
//    - March, April or May, the season is Spring
//    - June, July or August, the season is Summer
let month = prompt("Enter month:").toLowerCase();

if (month === "september" || month === "october" || month === "november") {
  console.log("Autumn");
} 
else if (month === "december" || month === "january" || month === "february") {
  console.log("Winter");
} 
else if (month === "march" || month === "april" || month === "may") {
  console.log("Spring");
} 
else if (month === "june" || month === "july" || month === "august") {
  console.log("Summer");
} 
else {
  console.log("Invalid month");
}

// 3. Check if a day is weekend day or a working day. Your script will take day as an input.

// ```sh
//     What is the day  today? Saturday
//     Saturday is a weekend.

//     What is the day today? saturDaY
//     Saturday is a weekend.

//     What is the day today? Friday
//     Friday is a working day.

//     What is the day today? FrIDAy
//     Friday is a working day.
//   ```
let day = prompt("What is the day today?").toLowerCase();

if (
  day === "saturday" ||
  day === "sunday"
) {
  console.log(`${day} is a weekend.`);
} 
else {
  console.log(`${day} is a working day.`);
}

// ### Exercises: Level 6
// 1. Write a program which tells the number of days in a month.

//   ```sh
//     Enter a month: January
//     January has 31 days.

//     Enter a month: JANUARY
//     January has 31 day

//     Enter a month: February
//     February has 28 days.

//     Enter a month: FEbruary
//     February has 28 days.
//   ```

let month = prompt("Enter a month:").toLowerCase();

if (
  month === "january" ||
  month === "march" ||
  month === "may" ||
  month === "july" ||
  month === "august" ||
  month === "october" ||
  month === "december"
) {
  console.log("31 days");
}

else if (
  month === "april" ||
  month === "june" ||
  month === "september" ||
  month === "november"
) {
  console.log("30 days");
}

else if (month === "february") {
  console.log("28 days");
}

else {
  console.log("Invalid month");
}

// 1. Write a program which tells the number of days in a month, now consider leap year.
let month = prompt("Enter month:").toLowerCase();
let year = Number(prompt("Enter year:"));

let isLeap = (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);

if (
  month === "january" ||
  month === "march" ||
  month === "may" ||
  month === "july" ||
  month === "august" ||
  month === "october" ||
  month === "december"
) {
  console.log("31 days");
}

else if (
  month === "april" ||
  month === "june" ||
  month === "september" ||
  month === "november"
) {
  console.log("30 days");
}

else if (month === "february") {
  if (isLeap) {
    console.log("29 days (Leap year)");
  } else {
    console.log("28 days");
  }
}

else {
  console.log("Invalid month");
}