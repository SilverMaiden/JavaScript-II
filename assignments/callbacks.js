// Create a higher order function and invoke the callback function to test your work. You have been provided an example of a problem and a solution to see how this works with our items array.  Study both the problem and the solution to figure out the rest of the problems.

const items = ['Pencil', 'Notebook', 'yo-yo', 'Gum'];

/*

  // GIVEN THIS PROBLEM:

  function firstItem(arr, cb) {
    // firstItem passes the first item of the given array to the callback function.
  }

  // SOLUTION:

  function firstItem(arr, cb) {
    return cb(arr[0]);
  }

  // NOTES ON THE SOLUTION:

  // firstItem is a higher order function.
  // It expects a callback (referred to as `cb`) as its second argument.
  // To test our solution, we can use the given `items` array and a variety of callbacks.
  // Note how callbacks can be declared separately, or inlined.

  // TEST 1 (inlined callback):

  const test1 = firstItem(items, item => `I love my ${item}!`);
  console.log(test1); // "I love my Pencil!"

  // TEST 2 (declaring callback before hand):

  function logExorbitantPrice(article) {
    return `this ${article} is worth a million dollars!`;
  };

  const test2 = firstItem(items, logExorbitantPrice);
  console.log(test2); // "this Pencil is worth a million dollars!"
*/

/******* GET LENGTH **********/

//Callback for getLength to check work.
function cbGetLength(parameter) {
    console.log(`Hello! The array length is ${parameter}.`);
}

function getLength(arr, cb) {
  // getLength passes the length of the array into the callback.
    let arrLength = arr.length;
    return cb(arrLength);
}

// Checking Work
getLength(items, cbGetLength);

/******* LAST ITEM ***********/

//Callback for last to check work
function cbLast(parameter) {
    console.log(`Hola! The last item of the input array is ${parameter}.`);
}
function last(arr, cb) {
  // last passes the last item of the array into the callback.
    let arrLast = arr.length - 1;
    return cb(arr[arrLast]);
}

// Checking Work
last(items, cbLast);

/****** NUM INPUTS TO CHECK WORK FOR sumNums and multiplyNums *********/

let num1 = 4;
let num2 = 5;


/******* SUM NUMS *********/

//Callback for sumNums to check work.
function cbSumNums(parameter) {
    console.log(`The sum of these numbers is ${parameter}.`);
}

function sumNums(x, y, cb) {
  // sumNums adds two numbers (x, y) and passes the result to the callback.
    let sum = x + y;
    return cb(sum);
}
// Checking Work
sumNums(num1, num2, cbSumNums);

/******* MULTIPLY NUMS *********/

//Callback for multiplyNums to check work

function cbMultiplyNums(parameter) {
    console.log(`The product of these two inputs is ${parameter}.`);
}

function multiplyNums(x, y, cb) {
  // multiplyNums multiplies two numbers and passes the result to the callback.
  let product = x * y;
  return cb(product);
}

// Checking Work
multiplyNums(num1, num2, cbMultiplyNums);

/******** CONTAINS ********/
function cbContains(parameter) {
    if (parameter) {
        console.log(`Yes, this item is in the list!`);
    } else {
        console.log(`No, this item is not in the list.`);
    }
}

function contains(item, list, cb) {
  // contains checks if an item is present inside of the given array/list.
  // Pass true to the callback if it is, otherwise pass false.
  let inList = false;
  if (list.includes(item)) {
      inList= true;
  }

  return cb(inList);
}

//Checking work
contains('Gum', items, cbContains);
contains('kitkats', items, cbContains);

/* STRETCH PROBLEM */

let list = ['a', 'a', 'b', 'b', 'zebra', 'cat', 'cat', 'cat', 'cat', 'trouble', 'treble'];

function cbRemoveDuplicates(parameter) {
    console.log(`Here is our duplicate free array: ${parameter}`);
}

function removeDuplicates(array, cb) {
  // removeDuplicates removes all duplicate values from the given array.
  // Pass the duplicate free array to the callback function.
  // Do not mutate the original array.
  let newArray = [];
  array.forEach(function (element) {
      if (newArray.includes(element) === false) {
          newArray.push(element);
      }
  })
  return cb(newArray);
}

//Checking work
removeDuplicates(list, cbRemoveDuplicates);
