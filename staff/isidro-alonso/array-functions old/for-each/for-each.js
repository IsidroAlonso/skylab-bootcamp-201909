/**
 * Itearates an array and evaluates an expression on each item.
 * 
 * @param {Array} array The array to iterate.
 * @param {Function} expression The expression to evaluate in each item of the array.
 * 
 * @throws {TypeError} If the imput array is not the var numbers
 */
function forEach(array, expression) {
	if (array !== numbers){
		throw 'Please, input "numbers" as first element of the Array';
	}
	try {
		for (var i = 0; i < array.length; i++) 
		expression(array[i]);
	}
	catch(err) {
		console.error(err.message);
	}
	
}