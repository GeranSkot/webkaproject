//"use strict";

const numberOfFilms = +prompt('How many films do you watch?', '');

console.log(numberOfFilms);

personalMovieDB = {
   count : numberOfFilms,
    movies : {},
    actors : {},
    genres : [],
    privat : false
};

for (let i = 0; i<2; i++){
  const  a = prompt('What is the last film you see', ''),
         b = prompt('Ocenka', '');

  if(a != null && b != null && a !== '' && b !== '' && a.length <50){
      personalMovieDB.movies[a] = b;
      console.log('done');
  } else {
      console.log('error');
      i--;
  }

}

if (personalMovieDB.count < 10) {
    console.log('malo')
} else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30 ) {
    console.log('norm')
} else if (personalMovieDB.count >= 30) {
    console.log('dohera')
} else {
    console.log('error')
}
console.log(personalMovieDB.movies);

