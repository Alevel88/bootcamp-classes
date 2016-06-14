(function (angular) {

	angular
		.module("myApp")
		.directive("showName", [function () {
			return {
				restrict: 'E',
				templateUrl: '../partials/show-name.html'
			}
		}]);

}(angular))