//"use strict";
let numberOfFilms;
//= +prompt('How many films do you watch?', '');

function start (){
    numberOfFilms = +prompt('How many films do you watch?', '');

    while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt('How many films do you watch?', '');

    }
}

start();
console.log(numberOfFilms);

personalMovieDB = {
   count : numberOfFilms,
    movies : {},
    actors : {},
    genres : [],
    privat : false
};



function rememberMyFilms (){
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
}

rememberMyFilms();



function detectPersonalLevel(){
    if (personalMovieDB.count < 10) {
        console.log('malo')
    } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30 ) {
        console.log('norm')
    } else if (personalMovieDB.count >= 30) {
        console.log('dohera')
    } else {
        console.log('error')
    }
}
detectPersonalLevel();

function showMyDB() {
    if (personalMovieDB.privat === false)  {
      console.log(personalMovieDB);
    }

}
showMyDB();


function writeYourGenres() {
    for (let i = 1; i <= 3; i++) {
        const  GenresOfFilms = prompt(`You favorite genres in number ${i}` , '');
        personalMovieDB.genres[i-1] = GenresOfFilms;

    }
}

writeYourGenres();



console.log(personalMovieDB.movies);

