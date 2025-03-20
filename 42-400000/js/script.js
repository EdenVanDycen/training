'use strict';

const box = document.getElementById('box'),
  btns = document.getElementsByTagName('button'),
  circles = document.getElementsByClassName('circle'),
  hearts = document.querySelectorAll('.heart'),
  oneHeart = document.querySelector('.heart'),
  wrapper = document.querySelector('.wrapper')


box.style.backgroundColor = 'blue';
// box.style.width = '700px';

box.style.cssText = 'background-color: blue ; width: 500px'

btns[1].style.borderRadius = '70%';
circles[1].style.backgroundColor = 'red';

// for (let i = 0; i < hearts.length; i++) {
//   hearts[i].style.backgroundColor = 'blue'
// }

hearts.forEach(item => {
  item.style.backgroundColor = 'blue';
});

const div = document.createElement('div');
const txt = document.createTextNode('I`l be hear');

div.classList.add('black');

// document.querySelector('.wrapper').append(div)
// document.querySelector('.wrapper').prepend(div)
// // document.body.append(div)
// wrapper.appendChild(div);

// hearts[0].before(div);
// hearts[0].after(div);

wrapper.insertBefore(div, hearts[1])
div.style.width = '300px'
// circles[0].remove();
// wrapper.removeChild(hearts[1]);

// hearts[0].replaceWith(circles[0]);
// wrapper.replaceChild(circles[0], hearts[0]);

div.innerHTML = '<h1>Hello World</h1>'
// div.textContent = '<h1>Hello World</h1>'

div.insertAdjacentHTML('afterend', '<h2>ALLEIKYM</h2>');
div.insertAdjacentHTML('afterbegin', '<h2>SALAM</h2>');