/**
 * Pushes a variable number of items into an array.
 * 
 * @param {Array} array The array to push elements to.
 * @param {...any} item The item (or items) to push.
 * 
 * @returns {Number} The new length of the array.
 * 
 * @throws {TypeError} If you are not using an array.
 */
function push(array) { 
	if (!array instanceof Array) {
		throw 'You are not using an array';
	}
	try {
	for (var i = 1; i < arguments.length; i++)
		array[array.length] = arguments[i]

	return array.length
	}
	catch(err){
		console.error(err.message);
	}

}