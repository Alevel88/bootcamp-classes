(function (undefined) { 'use strict'

	var app = angular.module('myApp');

	app.controller('mainCtrl', ['$scope', function ($scope) {

		$scope.sayMyName = function () {
			alert("My name is " + $scope.name);
		}

	}])
	
}());