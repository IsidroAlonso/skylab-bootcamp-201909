/**
 * Removes the last element from an array and returns that element. This method changes the length of the array.
 * 
 * @param {Array} array The array to delete elements to.
 *  
 * @returns {item} The new length of the array.
 */

 
function pop(array) {  debugger
    var lastItem= array[array.length-1];
    array.lenght=array.length-1;
    return lastItem;
    
}