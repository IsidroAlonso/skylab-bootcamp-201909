/**
 * creates a new array with all elements that pass the test implemented by the provided function.
 * 
 * @param {Array} array the array to iterate
 * @param {Function} expression the function that marks the conditions to follow in each element of the array
 * 
 */

function filter(array, expression) {

    var filteredArray = [];

    for(var i = 0; i < array.length; i++){

        if (expression(array[i])) {

            filteredArray[filteredArray.length] = array[i];
            // debugger;
        }
        
    }
    
    return filteredArray;

}