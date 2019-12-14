/**
 * Executes a reducer function (that you provide) on each element of the array,
 * resulting in a single output value
 * 
 * @param {Array} array The array to push elements to.
 * @param {Function} expresion The item (or items) to push.
 * 
 * @returns {*} The single value that results from the reduction.
 */

var array1 = [1, 2, 3, 4];
var reducer = (accumulator, currentValue) => accumulator + currentValue;
function reduce(array, expresion) { 
    var result = 0;
	for (var i =0; i < array.length; i++)
		result = reducer(result, array[i])

	return result;
}
console.log(reduce(array1, reducer))