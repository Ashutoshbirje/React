// var numbers = [3, 56, 2, 48, 5];

// //Map -Create a new array by doing something with each item in an array.

// function double(x) {
//   return x * 2;
// }

// const newNumber1 = numbers.map(double);
// console.log(newNumber1);

// const newNumber2 = numbers.map(function (x) {
//   return x * 3;
// });
// console.log(newNumber2);

// //Filter - Create a new array by keeping the items that return true.

// function Even_No(x) {
//   return x % 2 == 0;
// }

// const newNumber3 = numbers.filter(Even_No);
// console.log(newNumber3);

// const newNumber4 = numbers.filter(function (x) {
//   return x % 2 != 0;
// });
// console.log(newNumber4);

// //Reduce - Accumulate a value by doing something to each item in an array.

// var newNumber5 = numbers.reduce(function (accumnlator, currentNumber) {
//   // console.log("accumnlator = " + accumnlator);
//   // console.log("currentNumber = " + currentNumber);
//   return accumnlator + currentNumber;
// });
// console.log(newNumber5);

// //Find - find the first item that matches from an array.

// const newNumber6 = numbers.find(function (num) {
//   return num > 10;
// });
// console.log(newNumber6);

// //FindIndex - find the index of the first item that matches.

// const newNumber7 = numbers.findIndex(function (num) {
//   return num > 10;
// });
// console.log(newNumber7);

import emojipedia from "./emojipedia";

// console.log(emojipedia);

const newemoji = emojipedia.map(function (emojientry) {
  return emojientry.meaning.substring(0, 100);
});

console.log(newemoji);
