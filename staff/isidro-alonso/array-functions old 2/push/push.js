/**
 * adds one or more elements to the end of an array and returns the new length of the array.
 * 
 * @param {Array} array The array to iterate
 * 
 */

function push(array) {

   for(var i = 1; i < arguments.length; i++) {

      array[array.length] = arguments[i];

   }

   return array;

}