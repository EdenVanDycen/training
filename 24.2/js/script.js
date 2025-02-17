// "use strict";

// // const numberOfFilms = +prompt(" Сколько фильмов вы просмотрели?", "");

// // const personalMovieDB = {
// //   count: numberOfFilms,
// //   movies: {},
// //   actors: {},
// //   genres: [],
// //   privat: false
// // };

// // const a = prompt('Один из последних просмотренных фильмов?', ''),
// //   b = prompt('На сколько оцените его?', ''),
// //   c = prompt('Один из последних просмотренных фильмов?', ''),
// //   d = prompt('На сколько оцените его?', '');

// // personalMovieDB.movies[a] = b;
// // personalMovieDB.movies[c] = d;

// // console.log(personalMovieDB);


// // let numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?');

// // let personalMovieDB = {
// //   count: numberOfFilms,
// //   movies: {},
// //   actors: {},
// //   genres: [],
// //   privat: false
// // };

// // const a = prompt('Один из последних просмотренных фильмов?'),
// //   b = prompt('На сколько оцените его?'),
// //   c = prompt('Один из последних просмотренных фильмов?'),
// //   d = prompt('На сколько оцените его?');

// // personalMovieDB.movies[a] = c;
// // personalMovieDB.movies[b] = d;

// // console.log(personalMovieDB);


// const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?');

// const personalMovieDB = {
//   count: numberOfFilms,
//   movies: {},
//   actors: {},
//   genres: [],
//   private: false
// };

// for (let i = 0; i < 2; i++) {
//   const a = prompt('Один из последних просмотренных фильмов?'),
//     b = prompt('На сколько оцените его?');

//   if (a != null && b != null && a != '' && b != '' && a.length < 50) {
//     personalMovieDB.movies[a] = b;
//     console.log('DONE!');
//   } else {
//     console.log('ERROR!');
//     i--;
//   }
// };

// if (personalMovieDB.count < 10 || personalMovieDB.count >= 1) {
//   console.log("Просмотрено довольно мало фильмов")
// } else if (personalMovieDB.count >= 10 || personalMovieDB.count <= 30) {
//   console.log("Вы классический зритель");
// } else if (personalMovieDB.count >= 30) {
//   console.log("Вы киноман");
// } else {
//   console.log("Произошла ошибка");
// };

// console.log(personalMovieDB);

'use strict';

const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?');

let personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  private: false
};

for (let i = 0; i < 2; i++) {
  const a = prompt('Один из последних просмотренных фильмов?'),
    b = prompt('На сколько оцените его?');

  if (a != null && b != null && a != '' && b != '' && a.length < 50) {
    personalMovieDB.movies[a] = b;
    console.log('DONE!');
  } else {
    console.log('error');
    i--;
  }
};

if (personalMovieDB.count <= 10) {
  console.log("Просмотрено довольно мало фильмов");
} else if (personalMovieDB.count > 10 && personalMovieDB.count < 30) {
  console.log("Вы классический зритель");
} else if (personalMovieDB.count > 30) {
  console.log("Вы киноман");
} else (personalMovieDB.count == 0);


console.log(personalMovieDB);

const numberOfFilms1 = +prompt('Сколько фильмов вы уже посмотрели?');

let personalMovieDB1 = {
  count: numberOfFilms1,
  movies: {},
  actors: {},
  genres: [],
  private: false
};

const a = prompt('Один из последних просмотренных фильмов?'),
  b = prompt('На сколько оцените его?');

numberOfFilms1.movies[a] = b;

console.log(personalMovieDB1);
