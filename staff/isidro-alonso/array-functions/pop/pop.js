/**
 * removes the last element from an array and returns that element. This method changes the length of the array.
 * 
 * @param {Array} array the array to iterates
 * 
 */

function pop(array) {

    var extract = array[array.length-1];
    array.length--;
    
    return extract;

}