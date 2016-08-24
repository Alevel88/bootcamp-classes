(function (angular) { 'use strict'

	angular
		.module("myApp")
		.factory('auto', function() {			

			var on = false; // "Private" variable that handles internal state for on/off engine.

			function encender () {
				on = true;
				console.log("RUUUUUUM")
			}

			function avanzar () {
				if (on) {
					console.log("-->")
				} else {
					console.log("RUN ENGINE FIRST")
				}
				
			}

			function bosina () {
				console.log("TUUUUU TUUUUUUUUUU !!!!")
			}

			function detener () {
				on = false;
				console.log("- | -");
			}

			return {
				avanzar: avanzar,
				bosina: bosina,
				detener: detener,
				encender: encender
			}

		})

}(angular));