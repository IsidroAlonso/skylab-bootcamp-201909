// 1

function fun(a, b, c) { return a + b + c; }

console.log(fun(1, 2, 3));
console.log(fun.call(undefined, 1, 2, 3)); 
console.log(fun.apply(undefined, [1, 2, 3])); 

// 2

function attach(name, surname) { 
	this.name = name;
	this.surname = surname;
}

//attach('pepito', 'grillo');
//console.log(window.name); // pepito
//console.log(window.surname); // grillo

var grillo = {};
//attach.call(grillo, 'pepito', 'grillo');
//attach.apply(grillo, ['pepito', 'grillo']);
//console.log(grillo.name); // pepito
//console.log(grillo.surname); // grillo


function createAttach(context) {
	return function() {
		attach.apply(context, arguments);
    }
}

var attach2 = createAttach(grillo);

attach2('pepito', 'grillo');
console.log(grillo.name); // pepito
console.log(grillo.surname); // grillo

attach2('coco', 'drilo');
console.log(grillo.name); // coco
console.log(grillo.surname); // drilo

// 3

function attach(name, surname) { 
	this.name = name;
	this.surname = surname;

	return this.name + ' ' + this.surname;
}

var grillo = {}, escarabajo = {};

function createAttach(context) {
	return function() {
		return attach.apply(context, arguments);
    }
}

var attachOnGrillo = createAttach(grillo);
var attachOnEscarabajo = createAttach(escarabajo);

console.log(attachOnGrillo('Pepito', 'Grillo')); // Pepito Grillo
console.log(grillo.name); // Pepito
console.log(grillo.surname); // Grillo

console.log(attachOnEscarabajo('Ele', 'Fante')); // Ele Fante
console.log(escarabajo.name); // Ele
console.log(escarabajo.surname); // Fante

console.log(attachOnGrillo('Coco', 'Drilo')); // Coco Drilo
console.log(grillo.name); // Coco
console.log(grillo.surname); // Drilo

// 4

function attach(name, surname) { 
	this.name = name;
	this.surname = surname;

	return this.name + ' ' + this.surname;
}

var grillo = {}, escarabajo = {};

function bind(context, expression) {
	return function() {
		return expression.apply(context, arguments);
    }
}

var attachOnGrillo = bind(grillo, attach);
var attachOnEscarabajo = bind(escarabajo, attach);

console.log(attachOnGrillo('Pepito', 'Grillo')); // Pepito Grillo
console.log(grillo.name); // Pepito
console.log(grillo.surname); // Grillo

console.log(attachOnEscarabajo('Ele', 'Fante')); // Ele Fante
console.log(escarabajo.name); // Ele
console.log(escarabajo.surname); // Fante

console.log(attachOnGrillo('Coco', 'Drilo')); // Coco Drilo
console.log(grillo.name); // Coco
console.log(grillo.surname); // Drilo

// 5

function attach(name, surname) { 
	this.name = name;
	this.surname = surname;

	return this.name + ' ' + this.surname;
}

var grillo = {}, escarabajo = {};

//function bind(context, expression) {
//	return function() {
//		return expression.apply(context, arguments);
//    }
//}

//var attachOnGrillo = bind(grillo, attach);
//var attachOnEscarabajo = bind(escarabajo, attach);

var attachOnGrillo = attach.bind(grillo);
var attachOnEscarabajo = attach.bind(escarabajo);

console.log(attachOnGrillo('Pepito', 'Grillo')); // Pepito Grillo
console.log(grillo.name); // Pepito
console.log(grillo.surname); // Grillo

console.log(attachOnEscarabajo('Ele', 'Fante')); // Ele Fante
console.log(escarabajo.name); // Ele
console.log(escarabajo.surname); // Fante

console.log(attachOnGrillo('Coco', 'Drilo')); // Coco Drilo
console.log(grillo.name); // Coco
console.log(grillo.surname); // Drilo

// 6

function Person(name, surname) {
	this.name = name;
	this.surname = surname;
}

//var jd = new Person('John', 'Doe');

var jd = {};
Person.call(jd, 'John', 'Doe');

console.log(jd);





