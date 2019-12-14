/**
 * Removes the first element from an array and returns that element. This method changes the length of the array.
 * 
 * @param {Array} array The array to remove elements to.
 * 
 * @returns {Item} Return the removed item
 */
function shift(array) { 
	var firstItem = array[0];
	for(var i = 1; i<array.length; i++)
		array[i-1] = array[i];
	array.length--;
	return firstItem;
 }