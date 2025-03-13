'use strict';

let switcher = null;

if (switcher) {
  console.log('...Working');
};
// switcher ничего не имеет и из-за этого не отдает результата 
switcher = 1;
console.log('...Working');
// switcher имеет некое значение , из-за чего и отрабатывает

// let number = 5;

// function logNumber() {
//   console.log(number);
// }

// number = 6;
// logNumber();
// number = 8;
// logNumber();

function createCounter() {

  let counter = 0;
  const myFunction = function () {
    counter = counter + 1;
    return counter;
  }
  return myFunction;
}

const increment = createCounter();
const c1 = increment();
const c2 = increment();
const c3 = increment();

console.log(c1, c2, c3);

