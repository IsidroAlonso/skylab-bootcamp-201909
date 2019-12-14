
 /**
 * Finds the value of the first element of an array that meets the test function provided 
 * 
 * @param {Array} array The array to evaluate elements to the condition given 
 * 
 * @param {Function} expression The expression to evaluate in each item of the array.
 * 
 * @returns {value} returns the value of the first element that meets the function, otherwise it returns undefined.
 * 
 */



function find(array, expression) {
    if (typeof expression !== 'function') throw TypeError(expression + ' is not a function');
    
    for (i=0; i<array.length; i++) {
        if (expression(array[i])) return array [i];
    }
    return undefined;
}
