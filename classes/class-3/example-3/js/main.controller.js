(function (angular, undefined) { 'use strict'

	angular
		.module("myApp")
		.controller("mainCtrl", ['$scope', 'auto', main]);

	function main ($scope, auto) {

		auto.encender(); // RUUUUUUM

		auto.avanzar(); // -->

		auto.bosina(); // TUUUUU TUUUUUUUUUU !!!!

		console.log(auto.on); // UUUUUPSSS, IT IS NOT ACCESSIBLE. undefined

		auto.detener(); // - | -

		auto.avanzar(); // RUN ENGINE FIRST

	}

}(angular));