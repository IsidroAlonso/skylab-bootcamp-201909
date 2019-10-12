/***
 * merge two or more arrays. This method does not change the existing arrays, but instead returns a new array
 * 
 * @param {Array} argument the arrays to iterate
 * 
 * @returns {Array} newArray the new array made with the sum of all the arguments
 */

function concat() {

    var newArray = [];
    
    for (var i = 0; i < arguments.length; i++)
        for (var j = 0; j < arguments[i].length; j++)
            newArray[newArray.length] = arguments[i][j]
        // debugger;
    
    return newArray;

}