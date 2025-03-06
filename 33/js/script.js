'use strict';

// const arr = [1, 2, 3, 6, 8];
// arr.sort(compareNum);
// console.log(arr);

// function compareNum(a, b) {
//   return a - b;
// }

// arr.forEach(function (item, i, arr) {
//   console.log(`${i}: ${item} внутри массива ${arr}`);

// });


// arr.pop();
// arr.push(10);

// console.log(arr);

// for (let i = 0; i < arr.length; i++) {
//   console.log(arr[i]);
// }

// for (let value of arr) {
//   console.log(value);
// }


// const str = prompt('', '');
// const products = str.split(', ');
// products.sort();
// console.log(products.join('; '));

const arr = [1, 2, 3, 6, 8];
arr.sort(compareNum);
console.log(arr);

function compareNum(a, b) {
  return a - b
}
// arr[99] = 0
// console.log(arr);
// console.log(arr.length);

arr.forEach(function (item, i, arr) {
  console.log(`${i}: ${item} внутри массива ${arr}`);
})

// arr.pop();
// arr.push(10);
// console.log(arr);

// for (let i = 0; i < arr.length; i++) {
//   console.log(arr[i]);
// }

for (let value of arr) {
  console.log(value);
}

const str = prompt("", "");
str.sort();
const products = str.split(', ' && ' ,');
console.log(products.join(':  '));

