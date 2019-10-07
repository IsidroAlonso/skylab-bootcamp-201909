/**
 * Pushes a variable number of items into an array.
 * 
 * @param {Array} array The array to pop the last element.
 * @param {...any} item The item (or items) to pop.
 * 
 * @returns {number} The new lenth of the array.
 */
function pop(array) { 
    for (var i = 1; i < arguments.length; i++)
		array[array.length-1] = arguments[i];
    return array.length-1;
}