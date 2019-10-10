/**
 * @param {Array} array The array to iterate.
 * @param {Function} expression The function that tests if there are elements in the array that matches with the condition
 * 
 * @throws {TypeError} If array is not an array, or expression is not a function.
 */

function find(array, expression) {
	if (!(array instanceof Array)) throw TypeError(array + ' is not an array');
    if (typeof expression !== 'function') throw TypeError(expression + ' is not a function');
    
    for (var i = 0; i < array.length; i++)
        expression(array[i], i, array);

};
