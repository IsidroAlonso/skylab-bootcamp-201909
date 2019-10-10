/**
 * Itearates an array and evaluates an expression on each item.
 * 
 * @param {Array} array The array to iterate.
 * @param {Function} expression The expression to evaluate in each item of the array.
 * 
 * @throws {TypeError} If array is not an array, or expression is not a function.
 */
function forEach(array, expression) {
	if (!(array instanceof Array)) throw TypeError(array + ' is not an array');
	if (typeof expression !== 'function') throw TypeError(expression + ' is not a function');

	//throw Error('🤡');
	for (var i = 0; i < array.length; i++) 
		expression(array[i], i, array);
}