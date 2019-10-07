/**
 * Creates a new array with the results of calling a function for every array element
 * 
 * @param {Array} array The array to make the operation
 * @param {Array} expression The operation which result it's going to be a new parameter
 * 
 * @returns {Array} Return a new array with the results of each element.
 */
function map(array, expression) {

    var resultArray = [];

	for (var i = 0; i < array.length; i++) 
        resultArray[i] = expression(array[i]);

    return resultArray;
        
}