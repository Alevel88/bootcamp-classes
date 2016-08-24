var app = angular.module('myApp');

app.service('movieSrv', ['$http', function ($http) {

	var movies;

	this.initSrv = function () {
		movies = [{tittle: 'Matrix', 								year: '1999', type: 'Science Fiction'},
							{tittle: 'Men of Honor', 					year: '2000', type: 'Drama/Biography'},
							{tittle: "Mr. Popper's Penguins",	year: '2011', type: 'Comedy/Family'}];
	};

	this.getMovies = function () {
		return movies;
	}

}]);