/**
 * Removes the last element from an array and returns that element. This method changes the length of the array.
 * 
 * @param {Array} array The array to remove elements to.
 * 
 * @returns {Item} Return the removed item
 */
function pop(array) { 
	var lastItemPos = array.length-1; 
	var lastItem = array[lastItemPos]
	array.length--;
  
	return lastItem;
  }