/**
 * @param {number[]} numbers an array of integers
 * @returns {number} the length of the array
 */

function getLength(numbers) {
  let a = [20, 50, 30];

  let length = a.length;

  console.log("Array Length: " + length);
}

getLength();

/**
 * @param {number[]} numbers an array of integers
 * @returns {number} the sum of the numbers
 */

function getSum(numbers) {
  let sum = 0;

  for (let i = 0; i < arr.length; i++) sum += arr[i];

  return sum;
}

let arr = [35, 68, 10];

console.log("The sum of the array is: " + getSum(arr));

/**
 * @param {number[]} numbers an array of integers
 * @returns {number} the mean of the numbers
 */
function getMean(numbers) {
  let arr = [2, 5, 8, 4, 7, 6];

  let sum = 0;

  for (let num of arr) {
    sum += num;
  }

  return Math.floor(sum / arr.length);
}

console.log("The Mean of the array is: " + getMean(Math.floor));

/**
 * @param {number[]} numbers an array of integers
 * @returns {number} the smallest of the numbers
 */
function getMin(numbers) {
  let mini = Number.MAX_SAFE_INTEGER;

  for (let num of b) {
    if (num < mini) mini = num;
  }

  return mini;
}

let b = [2, 6, 7, 9];
console.log("Min is: " + getMin(b));

/**
 * @param {number[]} numbers an array of integers
 * @returns {number} the largest of the numbers
 */
function getMax(numbers) {
  let max = Number.MIN_SAFE_INTEGER;

  for (let num of c) {
    if (num > max) max = num;
  }

  return max;
}

let c = [2, 6, 7, 9];
console.log("Max is: " + getMax(c));

/**
 * @param {number[]} numbers an array of integers
 * @returns {number} the range of the numbers (max - min)
 */
function getRange(numbers) {
  let mini = Number.MAX_SAFE_INTEGER;

  for (let num of d) {
    if (num < mini) mini = num;
  }

  let max = Number.MIN_SAFE_INTEGER;

  for (let num of d) {
    if (num > max) max = num;
  }

  let range = max - mini;
  return range;
}

let d = [2, 6, 7, 9];
console.log("range is: " + getRange(d));

/**
 * @param {number[]} numbers an array of integers
 * @returns {number[]} the even numbers in the array
 */
function getEvens(numbers) {
  // TODO
}

/**
 * @param {number[]} numbers an array of integers
 * @returns {number[]} the odd numbers in the array
 */
function getOdds(numbers) {
  // TODO
}

// === READ BUT DO NOT EDIT THE CODE BELOW ===

/**
 * @param {string} commaSeparatedNumbers
 * @returns {number[]} the string converted into an array of numbers
 */
function convertStringToNumbers(commaSeparatedNumbers) {
  // Split the string of numbers into an array of strings.
  const strings = commaSeparatedNumbers.split(",");

  // Convert the array of strings into an array of numbers
  const numbers = [];
  for (const s of strings) {
    const number = parseInt(s);
    numbers.push(number);
  }
  return numbers;
}

/**
 * Prints some descriptive statistics about the provided numbers.
 * @param {number[]} numbers
 */
function describeNumbers(numbers) {
  console.log(numbers);
  console.log(`You have given ${getLength(numbers)} numbers.`);
  console.log(`The sum of your numbers is ${getSum(numbers)}.`);
  console.log(`The mean of your numbers is ${getMean(numbers)}.`);
  console.log(`The smallest of your numbers is ${getMin(numbers)}.`);
  console.log(`The largest of your numbers is ${getMax(numbers)}.`);
  console.log(`The range of your numbers is ${getRange(numbers)}.`);
  console.log(`The even numbers you gave are ${getEvens(numbers)}.`);
  console.log(`The odd numbers you gave are ${getOdds(numbers)}.`);
}

const userInputString = prompt(
  "Please enter some integers separated by commas.",
  "28,-15,30,975,400",
);
const numbers = convertStringToNumbers(userInputString);
describeNumbers(numbers);
