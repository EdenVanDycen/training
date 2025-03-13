'use strict';

// let a = 5;
// let b = a;


// b = b + 5;
// console.log(a);
// console.log(b);


// const obj = {
//   a: 5,
//   b: 1
// };

// const copy = obj; // Передает Ссылку 
// copy.a = 10;

// console.log(copy);
// console.log(obj);

// function copy(mainObj) {
//   let objCopy = {};

//   let key;
//   for (key in mainObj) {
//     objCopy[key] = mainObj[key];
//   }
//   return objCopy;
// }

// const numbers = {
//   a: 2,
//   b: 5,
//   c: {
//     x: 7,
//     y: 4
//   }
// };

// const newNumbers = copy(numbers);

// newNumbers.a = 10;
// newNumbers.c.x = 10;

// console.log(newNumbers);
// console.log(numbers);


// const add = {
//   d: 17,
//   e: 20
// };

// const clone = Object.assign({}, add);

// clone.d = 20;

// // console.log(add);
// // console.log(clone);



// const oldArr = ['a', 'd', 'c'];
// const newArr = oldArr.slice();

// newArr[1] = 'asdasd';
// console.log(oldArr);
// console.log(newArr);


// const video = ['youtube', 'vimeo', 'rutube'],
//   blogs = ['wordpress', 'livejournal', 'blogger'],
//   internet = [...video, ...blogs, 'vk', 'facebook'];
// console.log(internet);


// function log(a, b, c) {
//   console.log(a);
//   console.log(b);
//   console.log(c);
// }

// const num = [2, 5, 7];
// log(...num);


// const array = ['a', 'b'];

// const newAarray = [...array];

// const q = {
//   one: 1,
//   two: 2
// };

// const newObj = { ...q };

// console.log(newObj);
// console.log(q);

let a = 5,
  b = a + 5;

console.log(a);
console.log(b);

const obj = {
  a: 5,
  b: 1
}

// const copy = obj;
// copy.a = 10;

// console.log(copy);
// console.log(obj);

function copy(mainObj) {
  let objCopy = {};
  let key;
  for (key in mainObj) {
    objCopy[key] = mainObj[key];
  }
  return objCopy;
}

const numbers = {
  a: 2,
  b: 5,
  c: {
    x: 7,
    y: 4
  }
}

function copyA(mainObject) {
  let objCopy = {};
  let key;
  for (key in mainObject) {
    objCopy[key] = mainObject[key];
  }
  return objCopy
}
const someThing = copyA(numbers);
someThing.a = 5
console.log(someThing);


const video = ['sdadas', 'dasdasd', 'dasxzvc'],
  blogs = ['vcxzcx', 'xzvsa', ',mytgf'],
  internet = [...video, ...blogs, 'czxczx', 'rtegvcb'];

console.log(internet);
console.log(internet.length);

function loG(a, b, c) {
  console.log(a);
  console.log(b);
  console.log(c);
}

const NUM = [2, 5, 7];

loG(...NUM)

const ARR = [2, 5, 7, 9];
const NEWARR = [...ARR];
NEWARR[0] = 10;

console.log(NEWARR);
console.log(ARR);


const Q = {
  one: 51,
  two: 52
}

const newQ = { ...Q };

newQ.one = 55;
console.log(Q);
console.log(newQ);


function shit(MAINOBJ) {
  let NEWOBJ = {};
  let key;
  for (key in MAINOBJ) {
    NEWOBJ[key] = MAINOBJ[key]
  }
  return NEWOBJ;
}

const NUMM = {
  a: 52,
  b: 53,
  c: 55,
}

const HYITA = shit(NUMM);
HYITA.a = 100;
console.log(NUMM);
console.log(HYITA);

