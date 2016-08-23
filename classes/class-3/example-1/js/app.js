(function () { 'use strict'
	
	// Funcion constructora.
	function Persona(name, age) {
		this.name = name;
		this.age = age;
	}

	var soyUndefined = Persona('Nicolas', 28);

	console.log(soyUndefined);

	var persona = new Persona('Nicolas', 28);

	console.log(persona);

}());