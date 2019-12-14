
 /**
 * Checks if all the elements in the array pass the condition implemented by the given function
 * 
 * @param {Array} array The array to evaluate elements to the condition given 
 * 
 * @param {Function} expression The expression to evaluate in each item of the array.
 * 
 * @returns {boolean} returns true if all the elements in the array pass the condition; otherwise, false.
 * 
 */



function every(array,expression) { 
	if (typeof expression !== 'function') throw TypeError(expression + ' is not a function');
	
    for (let i = 0; i < array.length; i++) {
        if (!expression(array[i])) return false;
    }
    return true;
};


