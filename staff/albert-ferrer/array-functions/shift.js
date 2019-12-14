/**
 * Removes the first element from an array and returns that removed element. This method changes the length of the array.
 * 
 * @param {Array} array The array to delete the first elements to.
 *  
 * @returns {item} The new length of the array.
 */


function shift (array) {
    var firstElement = array[0];
    for (let i = 1; i < array.lenght; i++){
     array[i-1]=array[i]
        
    }
    array.lenght--
    return firstElement;
}