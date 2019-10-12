/**
 * tests whether all elements in the array pass the test implemented by the provided function. It returns a Boolean value. 
 * 
 * @param {Array} array the array to iterate
 * @param {Function} expression the function to check if the conditions of every array met
 * 
 */

function every(array, expression) {

    for(var i = 0; i < array.length; i++)
        var review = expression(array[i]);
        // debugger;
        return review;
        
}