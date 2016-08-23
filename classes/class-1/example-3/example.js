/**
 * Created by dario on 6/29/16.
 */
function Person(name, age) {
  this.name = name;
  this.age = age;
}

Person.prototype.jump = function () {
  console.log(this.name + ' hophop');
  return this;
};

Person.prototype.speak = function () {
  console.log(this.name + ' lalalalla');
  return this;
};

Person.prototype.runAway = function (person) {
  console.log(person.name + ' run away');
  return this;
};

var dario = new Person('dario', 29);
var luis = new Person('luis', 30);

dario.speak().jump();

luis.speak().jump();

dario.runAway(dario);

dario.runAway(luis);

function saltar () {
  return this;
}

function correr () {
  return this;
}

var sergio = {
  saltar: saltar,
  correr: correr
};

sergio.saltar().correr();

const MyModule = function () {}




