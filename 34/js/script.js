'use strict';

////CALLBACK FUNCTION 

function first() {
  ///do something 
  setTimeout(function () {
    console.log(1);
  }, 500);
}

function second() {
  console.log(2);
}

first();
second();


function learnJS(lang, callback) {
  console.log(`Я учу : ${lang}`);
  callback();
}

function done() {
  console.log('Я прошел этот урок!');
}

learnJS('JavaScript', done);

function something(someshit, callback) {
  console.log(`I create : ${someshit}`);
  callback();
}

function anyshit() {
  console.log('I build this shit!');
}
something('THAT SHIT', anyshit);

// function getFunction(name) {
//   if (!name) return function () { return "Who are you?" }
//   else return function () { return "Hello " + name; }
// }

// // Вызов
// var petya = getFunction("Петя");
// var unknown = getFunction()

// console.log(petya);
// console.log(petya());
// petya();


// var petya = getFunction("Петя");

// console.log(petya); // Выведет: [Function (anonymous)]

// console.log(petya()); // Выведет: "Hello Петя"


// setTimeout(petya, 1000); // Через 1 секунду выведет: "Hello Петя"