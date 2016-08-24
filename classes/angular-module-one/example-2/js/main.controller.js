(function () { 'use strict'

	var app = angular.module('myApp');

	app.controller('mainCtrl', ['$scope','$http', function ($scope, $http) {

		$scope.sayMyName = function () {
			alert("My name is " + $scope.name);
		}

		// $http({
		// 	method: 'GET',
		// 	url: 'https://api.themoviedb.org/3/movie/latest',
		// 	params: {
		// 		api_key: '579989834308dc1b0309510990ad9246'
		// 	}
		// }).then(function (response) {
		// 	console.log(response);
		// })

		// Simple GET request example:
		$http({
		  method: 'GET',
		  url: 'https://api.themoviedb.org/3/movie/latest?api_key=579989834308dc1b0309510990ad9246'
		}).then(function successCallback(response) {
		    // this callback will be called asynchronously
		    // when the response is available
		    console.log(response);
		  }, function errorCallback(response) {
		    // called asynchronously if an error occurs
		    // or server returns response with an error status.
		  });



	}])
	
}());