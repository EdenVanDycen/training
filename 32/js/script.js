'use strict';

// const option = {
//   name: 'test',
//   width: 1024,
//   height: 1024,
//   colors: {
//     font: 'white',
//     border: 'black',
//     bg: 'red'
//   },
//   // makeTest: () => {
//   //   console.log(this);

//   // }
//   makeTest: function () {
//     console.log(this);
//   }
// };
// option.makeTest();

// const { border, bg, font } = option.colors;
// console.log(border, font, bg);

// console.log(Object.keys(option));


// let counter = 0;

// for (let key in option) {
//   if (typeof (option[key]) === 'object') {
//     for (let i in option[key])
//       console.log(`Свойства ${i} , имеет значение ${option[key][i]}`);
//     counter++;
//   } else {
//     console.log(`Свойства ${key} , имеет значение ${option[key]}`);
//     counter++;
//   }
//   console.log(key);
// }
// console.log(counter);

// console.log(option.name);

// delete option.name;
// console.log(option);



// const option = {
//   name: 'test',
//   width: 1024,
//   height: 1024,
//   colors: {
//     bg: 'red',
//     border: 'black'
//   },
//   makeTest: function () {
//     console.log(Object.keys(option));
//     console.log(Object.keys(option).length);
//   }
// };
// option.makeTest();

// // console.log(Object.keys(option));
// // console.log(Object.keys(option).length);


// // let counter = 0;
// // for (let key in option) {
// //   if (typeof (option[key]) === 'object') {
// //     for (let i in option[key])
// //       console.log(`Свойство ${i} , имеет значение ${option[key][i]}`);
// //     counter++;
// //   } else {
// //     console.log(`Свойства ${key} , имеет значение ${option[key]}`);
// //     counter++;
// //   }
// // };
// // console.log(counter);

// const { border, bg } = option.colors;
// console.log(border, bg);

const some = {
  name: 'Ivan',
  family: 'Ivanov',
  phone: 892212314214,
  city: {
    city: 'Cheliabinsk',
    republic: 'Siberia'
  },
  makeTest: function () {
    console.log(Object.keys(some));
    console.log(Object.keys(some).length);
  }
};
some.makeTest();

for (let key in some) {
  if (typeof some[key] === 'object') {
    for (let i in some[key]) {
      console.log(`Свойства ${i} , имеет значение ${some[key][i]}`);
    }
  } else {
    console.log(`Свойства ${key} , присвоинно ${some[key]}`);
  }
}