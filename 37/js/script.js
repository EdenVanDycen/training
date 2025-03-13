'use strict';

// document.addEventListener("DOMContentLoaded", function (event) {
//   // Your code to run since DOM is loaded and ready
//   console.log(event);
//   let numberOfFilms;

//   function start() {
//     numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

//     while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
//       numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
//     }
//   }

//   start();

//   let personalMovieDB = {
//     count: numberOfFilms,
//     movies: {},
//     actors: {},
//     genres: [],
//     privat: false
//   };

//   function rememberMyFilms() {
//     for (let i = 0; i < 1; i++) {
//       const a = prompt('Один из последних просмотренных фильмов?'),
//         b = prompt('На сколько оцените его?')
//       if (a != '' && b != '' && a != null & b != null && a.length < 50) {
//         console.log('Done!');
//       } else {
//         console.log('Error!');
//         i--;
//       }
//       personalMovieDB.movies[a] = b;
//     };
//   };

//   rememberMyFilms();

//   function detectPersonalLevel() {
//     if (personalMovieDB.count < 10 && personalMovieDB.count != 0) {
//       alert("Просмотрено довольно мало фильмов");
//       console.log("Просмотрено довольно мало фильмов");
//     } else if (personalMovieDB.count > 10 && personalMovieDB.count < 30) {
//       alert("Вы классический зритель");
//       console.log("Вы классический зритель");
//     } else if (personalMovieDB.count >= 30) {
//       alert("Вы киноман");
//       console.log("Вы киноман");
//     } else {
//       console.log('ERROR!!!')
//       alert("Произошла ошибка!");
//     };
//   }

//   detectPersonalLevel();

//   function showMyDB(hidden) {
//     if (!hidden) {
//       console.log(personalMovieDB);
//     }
//   }

//   showMyDB(personalMovieDB.privat);

//   function writeYourGenres() {
//     for (let i = 1; i <= 3; i++) {
//       personalMovieDB.genres[i - 1] = prompt(`Ваш любимый жанр под номером ${i}`);
//     }
//   }

//   writeYourGenres();

//   console.log(personalMovieDB)
// });


const personalMovieDB = {
  count: 0,
  movies: {},
  actors: {},
  genres: [],
  privat: false,
  start: function () {
    personalMovieDB.count = prompt('Сколько фильмов вы уже посмотрели?', '');
    while (personalMovieDB.count == "" || personalMovieDB.count == null || isNaN(personalMovieDB.count)) {
      +prompt('Сколько фильмов вы уже посмотрели?');
    };
  },
  rememberMyFilms: function () {
    for (let i = 0; i < 1; i++) {
      const a = prompt('Один из последних просмотренных фильмов?'),
        b = prompt('На сколько оцените его?');
      if (a != "" && b != "" && a != null && b != null && a.length < 50 && b.length < 50) {
        console.log("DONE!");
      } else {
        console.log("ERROR!");
        i--;
      }
      personalMovieDB.movies[a] = b;
    };
  },
  detectPersonalLevel: function () {
    if (personalMovieDB.count <= 10) {
      console.log("Просмотрено довольно мало фильмов");
    } else if (personalMovieDB.count >= 11 && personalMovieDB.count == 30) {
      console.log("Вы классический зритель");
    } else if (personalMovieDB.count > 30) {
      console.log("Вы киноман");
    } else {
      console.log("ERROR!!!");
    }
  },
  showMyDB: function (hidden) {
    if (!hidden) {
      console.log(personalMovieDB);
    }
  },
  toggleVisibleMyDB: function () {
    if (personalMovieDB.privat) {
      personalMovieDB.privat = false;
    } else {
      personalMovieDB.privat = true;
    }
  },
  writeYourGenres: function () {
    for (let i = 1; i < 2; i++) {
      // let genre = prompt(`Ваш любимый жанр под номером ${i}`);
      // if (genre === '' || genre == null) {
      //   console.log('Введены некорректные данные');
      //   i--;
      // } else {
      //   personalMovieDB.genres[i - 1] = genre;
      // }
      ///////Второй метод
      let genres = prompt(`Введите ваши любимые жанры через запятую`).toLowerCase();

      if (genres === '' || genres == null) {
        console.log('Введены некорректные данные');
        i--;
      } else {
        personalMovieDB.genres = genres.split(', ', ' ,', ' , ');
        personalMovieDB.genres.sort();
      }
    }
    personalMovieDB.genres.forEach((item, i) => {
      console.log(`Любимый жанр ${i + 1} - это ${item}`);

    })
  },
};


