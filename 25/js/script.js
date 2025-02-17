'use strict';

// let num = 20;

// function showFirstMessage(text) {
//   console.log(text);
//   console.log(num);
// }

// showFirstMessage('Hello World');
// // console.log(num);

// // function calc(a, b) {
// //   return (a + b);
// // }
// // console.log(calc(4, 3));
// // console.log(calc(5, 6));
// // console.log(calc(10, 8));


// function ret(params) {
//   let num = 50;

//   //

//   return (num);
// }

// const anotherNum = ret();
// console.log(anotherNum);

// let logger = function foo() {
//   console.log('Hello');
// };
// logger();


// const calc = (a, b) => { a + b; };

// const usdCurr = 28;
// const eurCurr = 32;

// function convert(amount, curr) {
//   console.log(curr * amount);
// }

// convert(500, usdCurr);
// convert(500, eurCurr);



/////////////////////////////////////////////////////

function showFirstMessage() {
  console.log('Hello World');
}

showFirstMessage();


////////////////////////////
let num = 20;

function anyFunc(text) {

  console.log(text);
  let num = 10;
  console.log(num);

}

anyFunc('BINGO!');
console.log(num);

/////////////////FUNCTION DECLARATION 

function calc(a, b) {
  return (a + b);
}

console.log(calc(4, 6));
console.log(calc(4, 9));
console.log(calc(4, 15));


function ret() {
  let num1 = 50;

  //


  return num1;
}

const anotherNum = ret();
console.log(anotherNum);

////////////FUNCTION EXPRESSION 

const logger = function () {
  console.log('Hello');
};

logger();

/////////Стрелочные функции 

const calc1 = (a, b) => {
  return a + b;
};

console.log(calc1(1, 4));

