"use strict";

if (4 == 9) {
  console.log('Ok!');
} else {
  console.log('Error!');
};

//const num = 50;
// if (num < 49) {
//   console.log('Error');
// } else if (num > 100) {
//   console.log('To match');
// } else {
//   console.log('Ok!')
// };

(num == 50) ? console.log('Ok!') : console.log('Error');


const num = 50;

switch (num) {
  case 49:
    console.log('Not a true');
    break;
  case 100: console.log('Not a true');
    break;
  case 50: console.log('BINGO!');
    break;
  default:
    console.log('Not this time');
    break;
};

const some = 100;

if (some < 99) {
  console.log('Error!');
} else if (some > 100) {
  console.log('To many');
} else {
  console.log('BINGO!')
};


const someOne = 10;
(someOne == 10) ? console.log('BINGO!') : console.log('Error!');

const train = 20;

switch (train) {
  case 19:
    console.log('False')
    break;
  case 21:
    console.log('To many')
    break;
  case 20:
    console.log('BINGO!');
    break;
};