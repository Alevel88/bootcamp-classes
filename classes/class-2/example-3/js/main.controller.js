var app = angular.module('myApp');

app.controller('mainCtrl', ['$scope', 'movieSrv', function($scope, movieSrv){

	movieSrv.initSrv();

	$scope.getMovies = function () {
		return movieSrv.getMovies();
	}

	$scope.isNew = function (movie) {
		return movie.year > 2000;
	}
	
}])