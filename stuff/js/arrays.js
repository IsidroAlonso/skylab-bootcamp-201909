function Person(name, surname, gender) {
	this.name = name;
	this.surname = surname;
	this.gender = gender;
}

var john = new Person('John', 'Doe', 'male');
var jane = new Person('Jane', 'Doe', 'female');
var pepito = new Person('Pepito', 'Doe', 'male');
var kevin = new Person('Kevin', 'Doe', 'male');
var james = new Person('James', 'Doe', 'male');
var mary = new Person('Mary', 'Doe', 'female');
var jenny = new Person('Jenny', 'Doe', 'female');
var vane = new Person('Vane', 'Doe', 'female');
var chony = new Person('Chony', 'Doe', 'male');
var yoli = new Person('Yoli', 'Doe', 'female');
var juani = new Person('Juani', 'Doe', 'female');
var merche = new Person('Merche', 'Doe', 'female');

var people = [john, jane, pepito, kevin, james, mary, jenny, vane, chony, yoli, juani, merche];

// 1

var females = people.filter(function(person) { return person.gender === 'female'; });

// 2

var males = people.reduce(function(accum, person) { 
	person.gender === 'male' && ++accum; 

	return accum;
}, 0);

// 3

var males = people.reduce(function(accum, person) { 
	person.gender === 'male' && accum.push(person.name); 

	return accum;
}, []);

// 4

var names = people.map(function(person) { return person.name + ' ' + person.surname; });