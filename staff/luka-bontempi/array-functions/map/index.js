/**
 *  Creates a new array with the results of
 *  the indicated function call applied to each of its elements.
 * 
 * @param {Array} array The array to create the new array
 * 
 * @param {Function} expression The expression to evaluate in each item of the array.
 * 
 * @returns {Array} array the new array created
 * 
 * @throws {TypeError} If expression is not a function.
 */
 


function map(array, expression) {
    if (typeof expression !== 'function') throw TypeError(expression + ' is not a function')


    var newArr = [];
    for (var i = 0; i < array.length; i++)
    newArr[newArr.length] = expression(array[i])

    return newArr
}

