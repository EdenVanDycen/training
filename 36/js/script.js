'use strict';

// let str = 'xzczvx';
// let strObj = new String(str);

// console.log(typeof strObj);
// console.log(typeof str);

const solder = {
  health: 400,
  armor: 100,
  sayHello: function () {
    console.log("Hello");
  }
};

// const john = {
//   health: 100
// }
// john.__proto__ = solder;
// console.log(john);
// console.log(john.armor);

const john = Object.create(solder);

Object.setPrototypeOf(john, solder);

john.sayHello();


const someOne = {
  age: 27,
  sex: 'male',
  city: 'Your City?',
  logInfo: function () {
    console.log('Done!')
  }
};
const anyPerson = Object.create(someOne);

console.log(anyPerson.age);
console.log(anyPerson.sex);
console.log(anyPerson.city);
anyPerson.logInfo();

const creator = {
  zero: 'Ebani rowt',
  one: 'Chot nachinau ponimat`',
  two: 'Nado  yserdnee rabotat`',
  three: function creatorWord() {
    console.log('Done!');
  }
}
const noname = {
  word: 'Pizda'
}
Object.setPrototypeOf(noname, creator);
noname.three();


const creator1 = {
  one: 52,
  two: 'cxvzxc',
  three: function creatorWord() {
    console.log('ALLDONE!');
  },
}
const newManInTown = {
  one: 27
}
Object.setPrototypeOf(newManInTown, creator1);

newManInTown.three();

