/**
 * Pushes a variable number of items into an array.
 * 
 * @param {Array} array The array to add elements at the beginning.
 * @param {...any} item The item (or items) to add.
 * 
 * @returns {*} The new length of the array.
 */
function unshift(addedArray, array) { 

  var newArray = [addedArray + ',' + array];

  if (addedArray === undefined) {return array}

	// for (var i = 1; i < arguments.length; i++)
  //   array[array.length] = arguments[i]

	return newArray;
}