// for (let i = 0; i < 3; i++) {
//   console.log(i);
//   for (let j = 0; j <= 3; j++) {
//     console.log(j);
//     for (let k = 0; k <= 3; k++) {
//       console.log(k);
//     }
//   }
// }


// *
// **
// ***
// ****
// *****
// ******

let result = '';
const length = 7;

for (let i = 1; i < length; i++) {
  for (let j = 0; j < i; j++) {
    result += '*';
  }
  result += '\n';
}

console.log(result);



first: for (let i = 0; i < 3; i++) {
  console.log(`First level: ${i}`);
  for (let j = 0; j < 3; j++) {
    console.log(`Second level: ${j}`);
    for (let k = 0; k < 3; k++) {
      if (k === 2) continue first;
      console.log(`Third level: ${k}`);
    }
  }
};


for (let i = 0; i < 3; i++) {
  console.log(`First ${i}`);
  for (let j = 0; j < 3; j++) {
    console.log(`Second ${j}`);
    for (let k = 0; k < 3; k++) {
      console.log(`Third ${k}`);
    }
  }
};


let someOne = [
  {
    name: 'phone',
    haracteristic: {
      proc: 'M2',
      window: '360px - 420px',
      dinamic: '100vat'
    }
  },
  {
    name: 'PC',
    haracteristic: {
      proc: 'intel I-9',
      videoCart: 'RTX-4090TI',
      muzCart: '3000vat'
    }
  },
  {
    name: 'console',
    haracteristic: {
      user: 'Для пидоров'
    }
  }
];

for (let i = 0; i < someOne.length; i++) {
  console.log(someOne[i].haracteristic);
}