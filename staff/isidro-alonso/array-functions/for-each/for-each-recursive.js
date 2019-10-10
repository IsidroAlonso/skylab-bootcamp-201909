/**
 * Itearates an array and evaluates an expression on each item.
 * 
 * @param {Array} array The array to iterate.
 * @param {Function} expression The expression to evaluate in each item of the array.
 * 
 * @throws {TypeError} If the imput array is not the var numbers
 */
function forEach(array, expression) {
	
//

}

console.log('DEMO forEach');

var numbers = [1, 2, 3];

console.log('should print each number');

console.log(forEach(numbers, function(number) { console.log(number); }));

console.log('should multiply each number by 10');

console.log(forEach(numbers, function(number) { console.log(number * 10); }));

console.log('should express each number with a "is a number" string');

console.log(forEach(numbers, function(number) { console.log('this is number ' + number); }));