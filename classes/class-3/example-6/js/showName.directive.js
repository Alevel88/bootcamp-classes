(function (angular) { 'use strict';

	angular
		.module("myApp")
		.directive("showName", [function () {
			return {
				restrict: 'E',
				templateUrl: '../partials/show-name.html',
				scope: {
					myName: '='
				},
				link: dLink
			};

			function dLink (scope) {

				scope.showName = function () {
					alert(scope.myName)
				}

			}
		}]);

}(angular))