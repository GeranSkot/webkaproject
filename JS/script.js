//"use strict";

numberOfFilms = prompt('How many films do you watch?', '');

console.log(numberOfFilms);

personalMovieDB = {
   count : numberOfFilms,
    movies : {},
    actors : {},
    genres : [],
    privat : false
};

movie = prompt('What is the last film you see', '');
rate = prompt('Ocenka', '');

personalMovieDB.movies = {
    movie, rate
}
console.log(personalMovieDB.movies);

