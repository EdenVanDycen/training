"use strict";

// const hamb = 5;
// const fries = 1;

// if (hamb && fries) {
//   console.log('BINGO!');
// }


// const hamb = 3;
// const fries = 1;
// const cola = 1;

// console.log((hamb === 3 && fries && cola));

// console.log(1 && 0);
// console.log(1 && 5);
// console.log(null && 5);
// console.log(0 && "asdasdsxc");



// if (hamb === 3 && fries === 1 && cola) {
//   console.log('BINGO!');
// } else {
//   console.log('Bruh!')
// };


const hamb = 3;
const fries = 3;
const cola = 0;
const nuggets = 2;


if (hamb === 3 && cola === 2 || fries === 3 && nuggets === 2) {
  console.log('BINGO!');
} else {
  console.log('Bruh!')
};

console.log(hamb === 3 && cola === 2 || fries === 3 && nuggets === 2);


let johnReport, alexReport, samReport, mariaReport = 'Done!';
console.log(johnReport || alexReport || samReport || mariaReport);




console.log(NaN || 2 || undefined);
console.log(NaN && 2 && undefined);
console.log(1 && 2 && 3);
console.log(!1 && 2 || !3);
console.log(25 || null && !3);
console.log(NaN || null || !3 || undefined || 5);
console.log(NaN || null && !3 && undefined || 5);
console.log(5 === 5 && 3 > 1 || 5);

const hamburger = 3;
const friesSek = 3;
const colaSek = 0;
const nuggetsSek = 2;

if (hamburger === 3 && colaSek || friesSek === 3 && nuggetsSek) {
  console.log("BINGO!")
};

let hamburg;
const friesSekOne = NaN;
const colaSekOne = 0;
const nuggetsSekOne = 2;

if (hamburg || colaSekOne || friesSekOne === 3 || nuggetsSekOne) {
  console.log('BINGO!')
};

let hambSek;
const friesTest = NaN;
const colaTest = 0;
const nuggetsTest = 2;

if (hambSek && colaTest || friesTest === 3 && nuggetsTest) {
  console.log('BINGO!')
};