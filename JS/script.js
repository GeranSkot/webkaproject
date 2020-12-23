//"use strict";
// let numberOfFilms;
//= +prompt('How many films do you watch?', '');

// function

// start();
// console.log(numberOfFilms);

// function rememberMyFilms (){
//     for (let i = 0; i<2; i++){
//         const  a = prompt('What is the last film you see', ''),
//             b = prompt('Ocenka', '');
//
//         if(a != null && b != null && a !== '' && b !== '' && a.length <50){
//             personalMovieDB.movies[a] = b;
//             console.log('done');
//         } else {
//             console.log('error');
//             i--;
//         }
//
//     }
// }

// rememberMyFilms();

// function detectPersonalLevel(){
//     if (personalMovieDB.count < 10) {
//         console.log('malo')
//     } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30 ) {
//         console.log('norm')
//     } else if (personalMovieDB.count >= 30) {
//         console.log('dohera')
//     } else {
//         console.log('error')
//     }
// }
// detectPersonalLevel();

// function showMyDB() {
//     if (personalMovieDB.privat === false)  {
//       console.log(personalMovieDB);
//     }
//
// }
// showMyDB();

// function writeYourGenres() {
//     for (let i = 1; i <= 3; i++) {
//         const  GenresOfFilms = prompt(`You favorite genres in number ${i}` , '');
//         personalMovieDB.genres[i-1] = GenresOfFilms;
//
//     }
// }
//
// writeYourGenres();

// console.log(personalMovieDB.movies);

personalMovieDB = {
    count : 0,
    movies : {},
    actors : {},
    genres : [],
    privat : false,
    start: function () {
        personalMovieDB.count = +prompt('How many films do you watch?', '');

        while ( personalMovieDB.count == '' ||  personalMovieDB.count == null || isNaN( personalMovieDB.count)) {
            numberOfFilms = +prompt('How many films do you watch?', '');

        }

    },
    rememberMyFilms: function () {
        for (let i = 0; i < 2; i++) {
            const a = prompt('What is the last film you see', ''),
                b = prompt('Ocenka', '');

            if (a != null && b != null && a !== '' && b !== '' && a.length < 50) {
                personalMovieDB.movies[a] = b;
                console.log('done');
            } else {
                console.log('error');
                i--;
            }
        }
    },
    detectPersonalLevel: function () {
        if (personalMovieDB.count < 10) {
            console.log('malo')
        } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
            console.log('norm')
        } else if (personalMovieDB.count >= 30) {
            console.log('dohera')
        } else {
            console.log('error')
        }
    },
    showMyDB: function () {
        if (personalMovieDB.privat === false)  {
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
            // let genre = prompt(`You favorite genres in number ${i}`);
            // // const  GenresOfFilms =
            //
            // if (genre === '' || genre == null) {
            //     console.log('Data is not correct');
            //     i--;
            // } else {
            //     personalMovieDB.genres[i-1] = genre;
            // }

            let genres = prompt(`Write your favorite genres`);
            if (genres === '' || genres == null) {
                console.log('Data is not correct');
                i--;
            } else {
                personalMovieDB.genres = genres.split(', ');
                personalMovieDB.genres.sort();
            }

        }
        personalMovieDB.genres.forEach((item, i) => {
            console.log(`Favorite genre ${i+1} - its ${item}`);
        });
    }
};
