'use strict';

let numberOfFilms;

function start() {
  numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

  while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
    numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
  }
}

start();

let personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  privat: false
};

function rememberMyFilms() {
  for (let i = 0; i < 1; i++) {
    const a = prompt('Один из последних просмотренных фильмов?'),
      b = prompt('На сколько оцените его?')
    if (a != '' && b != '' && a != null & b != null && a.length < 50) {
      console.log('Done!');
    } else {
      console.log('Error!');
      i--;
    }
    personalMovieDB.movies[a] = b;
  };
};

rememberMyFilms();

function detectPersonalLevel() {
  if (personalMovieDB.count < 10 && personalMovieDB.count != 0) {
    alert("Просмотрено довольно мало фильмов");
    console.log("Просмотрено довольно мало фильмов");
  } else if (personalMovieDB.count > 10 && personalMovieDB.count < 30) {
    alert("Вы классический зритель");
    console.log("Вы классический зритель");
  } else if (personalMovieDB.count >= 30) {
    alert("Вы киноман");
    console.log("Вы киноман");
  } else {
    console.log('ERROR!!!')
    alert("Произошла ошибка!");
  };
}

detectPersonalLevel();

function showMyDB(hidden) {
  if (!hidden) {
    console.log(personalMovieDB);
  }
}

showMyDB(personalMovieDB.privat);

function writeYourGenres() {
  for (let i = 1; i <= 3; i++) {
    personalMovieDB.genres[i - 1] = prompt(`Ваш любимый жанр под номером ${i}`);
  }
}

writeYourGenres();

console.log(personalMovieDB)
