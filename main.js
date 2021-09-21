const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?');

const personalMovieDB ={
	count: numberOfFilms,
	movies:{},
	actors:{},
	genres:[],
	privat: false,
};

const a = prompt('Один из последнич просмотренных фильмов?'),
      b = prompt('На сколько оцениваете его?'),
	  c = prompt('Один из последнич просмотренных фильмов?'),
      d = prompt('На сколько оцениваете его?');
	  
personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;

console.log(personalMovieDB);
