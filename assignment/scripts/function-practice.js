console.log('***** Function Practice *****')

// Add the required code to complete the functions below
// After _each_ function, use a console log to call the function
// to test it and display the result


/**
 * A function that takes no inputs and returns 'Hello World'
 * @returns 'Hello World'
 */
// 1. Function to return 'Hello World!'
function hello() {
  return 'Hello World!';
}
// Call the function to test
console.log('Test - should say "Hello World!"', hello());

/**
 * A function that takes in a name and returns a greeting with the name.
 * @param {string} name - Takes a name
 * @returns {string} "Hello name"
 */

// 2. Function to return an personalized hello, using the `name` argument.
//    for example 'Hello, Jo!', or 'Hello, Stacy!'
function helloName(name) {
  return 'Hello ' + name + '!';
}
// Remember to call the function to test
console.log(helloName('Stacy'));

/**
 * A function to add two numbers together and return the result
 * @param {number} numOne 
 * @param {number} numTwo 
 * @returns Sum of numOne and numTwo
 */

// 3. Function to add two numbers together & return the result
function addNumbers(numOne,numTwo) {
  return numOne + numTwo;
}

// Call the function
console.log('The two numbers equal',addNumbers(3,9));

/**
 * A function that multiplies three numbers together
 * @param {number} numOne 
 * @param {number} numTwo 
 * @param {number} numThree 
 * @returns The product of the three numbers
 */

// 4. Function to multiply three numbers & return the result
function multiplyThree(numOne,numTwo,numThree){
  return numOne * numTwo * numThree;
}

console.log('The product of the three numbers is',multiplyThree(5,2,7));

/**
 * A function that takes in a number and returns true if the number is positive and
 * false is the number is negative.
 * @param {number} number 
 * @returns true if number is positive, false if number is negative
 */

// 5. Function that will return true if a number is positive, 
//    or greater than zero, and false otherwise
function isPositive(number) {
  if (number > 0){
    return true;
  } else 
    return false;
}

// Call the function to test each outcome (true & false) 
// Write a separate console.log statement for each outcome
console.log( 'isPositive - should say true', isPositive(3) );
console.log( 'isPositive - should say false', isPositive(0) );
console.log( 'isPositive - should say false', isPositive(-3) );


/**
 * A function that takes an array and returns the last item in an array,
 * or "undefined" if the array is empty
 * @param {array} array - An array of values, can be numbers, strings, or even empty 
 * @returns The last item in an array or "undefined" if the array is empty
 */

// 6. Function to return the _last_ item in an array. If the 
//    array is empty, return `undefined`.
function getLast(array) {
  
  if (array.length >= 0) {
  let last = array[array.length - 1];
  return last; 
  } else {
    return 'undefined';
  }
}

//Sample arrays and logs
let a = [5, 1, 2, 4, 5, 6];

//We expect 6 in the log
console.log(getLast(a));

let b = ['yes','hello','goodbye',5,'one','where'];
//We expect 'where' in the log
console.log(getLast(b))

let c = [];
//We expect 'undefined' in the log
console.log(getLast(c));

/**
 * A function that finds a value in an array and returns true if the value is found,
 * and false if it is not
 * @param {*} value - Takes any value, number, or string 
 * @param {*} array - Takes an array of values, numbers, or strings
 * @returns true if the value is found in the array or false if it is not
 */

// 7. Function to find a value in an array. Return true if the 
//    value is found and false otherwise. Use a loop;
//    DO NOT use Array.includes, Array.indexOf, or Array.find 
function find(value, array){
  let outcome = false;
  for (i=0; i<array.length; i++) {
    if (array[i] === value) {
      outcome = true;
    }
  }
  return outcome;
}

//Use sample array from above, looking for 1, should return true
console.log(find(1,a));
//Again, but this time, look for 99
console.log(find(99,a));

// ----------------------
// Stretch Goals
// ----------------------
// 8. Function to check if a letter is the first letter in a 
//    string. Return true if it is, and false otherwise

/**
 * Function that checks if a specific letter is the first letter in a string
 * @param {string} letter - Single-character string
 * @param {string} string - String
 * @returns True if specific letter is the first letter, false if not
 */

function isFirstLetter(letter,string) {
  let outcome = false;
  
  if (string.charAt() === letter) {
    outcome = true;
  }
return outcome;
}

console.log( 'isFirstLetter - should say true', isFirstLetter('a', 'apple') );
console.log( 'isFirstLetter - should say false', isFirstLetter('z', 'apple') );

/**
 * A function to add sum of all numbers in an array
 * @param {array} array of numbers
 * @returns Sum of all all numbers in an array
 */

// 9. Function to return the sum of all numbers in an array
function sumAll(array) {
  let sum = 0
  // TODO: loop to add items
  for (let i of array) {
    sum = sum + i;
  }
  return sum;
}

//Use array 'a' from before, expecting 23
console.log('The sum of all numbers in the array is',sumAll(a));

/**
 * A function that returns a new array of all positive (greater than 0) numbers from an input array
 * @param {array} array of numbers 
 * @returns A new array with only positive numbers (greater than 0) or else returns an empty array
 */

// 10. Function to return a new array of all positive (greater than zero)
//     numbers contained in an input array. If there are no positive numbers
//     return an empty array. Note: The input array should not change.

function positiveArray(array) {
  let positive = [];

  for (i=0; i<array.length; i++) {
    if (array[i] > 0) {
      positive.push(array[i]);
    }
  }
  return positive;
}

//Sample arrays to test in function
let z = [5, -6, 1, 4, -9, 0, 4, 10, -3];
let n = [-5, -2, 0, -3, -9];

//z array, we expect all positive numbers and no 0 in the new array
console.log('The original array is',z,'The positive numbers in the array are',positiveArray(z));

//n array, we expect an empty array as there are only negatives and 0
console.log('The original array is',n,'We are expecting an empty array',positiveArray(n));

// 11. Pick a problem from Edabit(https://edabit.com/) or 
//     CodeWars(https://www.codewars.com/). Then describe it 
//     here in a comment, write the function, and test it!
