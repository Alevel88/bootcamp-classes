(function (undefined) { 'use strict'

	function auto () {

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
	}

	var auto = auto();

	auto.encender(); // RUUUUUUM

	auto.avanzar(); // -->

	auto.bosina(); // TUUUUU TUUUUUUUUUU !!!!

	console.log(auto.on); // UUUUUPSSS, IT IS NOT ACCESSIBLE. undefined

	auto.detener(); // - | -

	auto.avanzar(); // RUN ENGINE FIRST

}());