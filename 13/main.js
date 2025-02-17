"use strict"

// alert('Hello');

// const result = confirm('Are you here?');
// console.log(result);

// const answer = prompt("Are you age = 18?", "18");
// console.log(typeof (answer));

const answer = +prompt("Are you age = 18?", "18");
console.log(answer + 5);


// const answers = [];

// answers[0] = prompt('What are your Name?', '');
// answers[1] = prompt('What are your family?', '');
// answers[2] = prompt('What are your Age?', '');

// console.log(typeof (answers));


///////////////////////////////
/////////////////// Пример интерполяции в JS /////////////
const category = 'toys';
// console.log('http://someurl./com/' + category + '/' + '5');
console.log(`http://someurl./com/${category}/5`);

const user = 'Ivan';
alert(`Hello , ${user}`)
console.log(`Hello , ${user}`);

/////////////////

const userName = prompt('Your Name is ?');
alert(`Hello , ${userName}`);
console.log(userName);