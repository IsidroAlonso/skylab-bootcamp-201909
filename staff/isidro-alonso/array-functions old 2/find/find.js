/**
 * returns the value of the first element in the provided array that satisfies the provided testing function.
 * 
 * @param {Array} array The array to iterate
 * @param {Function} expression The expression that puts a condition to finde in each element of the array.
 * 
 */

function find(array, expression) {

    for(var i = 0; i < array.length; i++) {

        if (expression(array[i])) {

            return array[i];

        } 

    }

    return undefined;

}