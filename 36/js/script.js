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

const john = Object.create(solder);

Object.setPrototypeOf(john, solder);

john.sayHello();

