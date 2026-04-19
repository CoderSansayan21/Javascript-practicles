// ### Exercises: Level 1


// 1. Declare a function _fullName_ and it print out your full name.
function fullName() {
  console.log("Sansayan Tharmaradnam");
}
// 2. Declare a function _fullName_ and now it takes firstName, lastName as a parameter and it returns your full - name.

function fullName(firstName, lastName) {
  return firstName + " " + lastName;
}
// 3. Declare a function _addNumbers_ and it takes two two parameters and it returns sum.

function addNumbers(a, b) {
  return a + b;
}
// 4. An area of a rectangle is calculated as follows: _area = length x width_. Write a function which calculates _areaOfRectangle_.

function areaOfRectangle(length, width) {
  return length * width;
}

// 5. A perimeter of a rectangle is calculated as follows: _perimeter= 2x(length + width)_. Write a function which calculates _perimeterOfRectangle_.

function perimeterOfRectangle(length, width) {
  return 2 * (length + width);
}

// 6. A volume of a rectangular prism is calculated as follows: _volume = length x width x height_. Write a function which calculates _volumeOfRectPrism_.

function volumeOfRectPrism(length, width, height) {
  return length * width * height;
}

// 7. Area of a circle is calculated as follows: _area = π x r x r_. Write a function which calculates _areaOfCircle_

function areaOfCircle(r) {
  return Math.PI * r * r;
}

// 8. Circumference of a circle is calculated as follows: _circumference = 2πr_. Write a function which calculates _circumOfCircle_

function circumOfCircle(r) {
  return 2 * Math.PI * r;
}


// 9. Density of a substance is calculated as follows:_density= mass/volume_. Write a function which calculates _density_.

function density(mass, volume) {
  return mass / volume;
}

// 10. Speed is calculated by dividing the total distance covered by a moving object divided by the total amount of time taken. Write a function which calculates a speed of a moving object, _speed_.

function speed(distance, time) {
  return distance / time;
}

// 11. Weight of a substance is calculated as follows: _weight = mass x gravity_. Write a function which calculates _weight_.

function weight(mass, gravity = 9.8) {
  return mass * gravity;
}

// 12. Temperature in oC can be converted to oF using this formula: _oF = (oC x 9/5) + 32_. Write a function which convert oC to oF _convertCelsiusToFahrenheit_.

function convertCelsiusToFahrenheit(c) {
  return (c * 9/5) + 32;
}

// 13. Body mass index(BMI) is calculated as follows: _bmi = weight in Kg / (height x height) in m2_. Write a function which calculates _bmi_. BMI is used to broadly define different weight groups in adults 20 years old or older.Check if a person is _underweight, normal, overweight_ or _obese_ based the information given below.


//     - The same groups apply to both men and women.
//     - _Underweight_: BMI is less than 18.5
//     - _Normal weight_: BMI is 18.5 to 24.9
//     - _Overweight_: BMI is 25 to 29.9
//     - _Obese_: BMI is 30 or more

// 13.
function bmi(weight, height) {
  let value = weight / (height * height);

  if (value < 18.5) return "Underweight";
  else if (value >= 18.5 && value <= 24.9) return "Normal";
  else if (value >= 25 && value <= 29.9) return "Overweight";
  else return "Obese";
}

// 14. Write a function called _checkSeason_, it takes a month parameter and returns the season:Autumn, Winter, Spring or Summer.

function checkSeason(month) {
  month = month.toLowerCase();

  if (["september","october","november"].includes(month)) return "Autumn";
  else if (["december","january","february"].includes(month)) return "Winter";
  else if (["march","april","may"].includes(month)) return "Spring";
  else if (["june","july","august"].includes(month)) return "Summer";
}


// 15. Math.max returns its largest argument. Write a function findMax that takes three arguments and returns their maximum with out using Math.max method.

//     ```js
//     console.log(findMax(0, 10, 5))
//     10
//     console.log(findMax(0, -10, -2))
//     0
//     ```


function findMax(a, b, c) {
  let max = a;

  if (b > max) max = b;
  if (c > max) max = c;

  return max;
}

// ### Exercises: Level 2

