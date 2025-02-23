'use strict';

const option = {
  name: 'test',
  width: 1024,
  height: 1024,
  colors: {
    font: 'white',
    border: 'black',
    bg: 'red'
  },
  // makeTest: () => {
  //   console.log(this);

  // }
  makeTest: function () {
    console.log(this);
  }
};
option.makeTest();

const { border, bg, font } = option.colors;
console.log(border, font);

console.log(Object.keys(option));


let counter = 0;

for (let key in option) {
  if (typeof (option[key]) === 'object') {
    for (let i in option[key])
      console.log(`Свойства ${i} , имеет значение ${option[key][i]}`);
    counter++;
  } else {
    console.log(`Свойства ${key} , имеет значение ${option[key]}`);
    counter++;
  }
  console.log(key);
}
console.log(counter);

console.log(option.name);

delete option.name;
console.log(option);





