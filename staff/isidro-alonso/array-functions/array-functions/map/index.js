/**
 * creates a new array with the results of calling a provided function on every element in the calling array.
 * 
 * @param {Array} array the array to iterate
 * @param {Array} expression the function you provide to apply to each element
 * 
 */

function map(array, expression) {

	newArray = [];

	for (var i= 0; i < array.length; i++)
		newArray[i] = expression(array[i]);

	return newArray;

}