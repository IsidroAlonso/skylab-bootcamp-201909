/**
 * Pushes a variable number of items into an array.
 * 
 * @param {Array} array The array to pop the last element.
 * 
 * @returns {*} The new length of the array.
 */
function pop(array) {
  var lengthArray = array.length - 1;
  array.length--;

  return lengthArray;

}