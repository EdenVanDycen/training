
// const usdCurr = 28;
// const discount = 0.9;

// function convert(amount, curr) {
//   return curr * amount;
// }

// function promotion(result) {
//   console.log(result * discount);
// }

// const res = convert(500, usdCurr);

// promotion(res);

// function test() {
//   for (let i = 0; i < 5; i++) {
//     console.log(i);
//     if (i === 3) return
//   }
//   console.log('End!');
// }

// test();

// function doNofing() { };
// console.log(doNofing() === undefined);

const usdCurr = 28;
const discount = 0.9;


function convert(amount, curr) {
  return amount * curr;
}

function promotion(result) {
  console.log(result * discount);
  // return function () { };
}

const res = convert(500, usdCurr);
promotion(res);

function test() {
  for (let i = 0; i < 5; i++) {
    console.log(i);
    if (i === 3) return
  }
  console.log('End');
}

test();

function doNothing() { };
console.log(doNothing() === undefined);