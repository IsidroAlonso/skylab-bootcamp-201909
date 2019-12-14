
 /**
 * Checks if at least one element of the array complies with the condition implemented by the specific function.
 * 
 * @param {Array} array The array to evaluate elements to the condition given 
 * 
 * @param {Function} expression The expression to evaluate in each item of the array.
 * 
 * @returns {boolean} returns true if the callback function returns a true value for any element
 * 
 *  in the array; otherwise, false.
 */



function some(array,expression) { 
    if (typeof expression !== 'function') throw TypeError(expression + ' is not a function');

    var isElement = false;
    for (i = 0; i < array.length; i++) {
        if(expression(array[i])) {
        isElement = true;
    }
}
    return isElement
}

