/**
 * Creates a new array applying the expression received
 * 
 * @param {Array} array The array to iterate.
 * @param {expression} item Function which will return a new paramater.
 * 
 * @returns {newArray} Return a new array with new paramaters.
 */
function map(array, expression) {
	var newArray = []
	  for (var i = 0; i < array.length; i++)
		  newArray[i] = expression(array[i])
  
	  return newArray
  }