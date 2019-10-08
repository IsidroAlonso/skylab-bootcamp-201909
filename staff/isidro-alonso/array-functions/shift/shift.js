/**
 * Pushes a variable number of items into an array.
 * 
 * @param {Array} array The array without the first element.
 * 
 * @returns {*} The new length of the array.
 */
function shift(array) {
  var firstArray = array[0];

  for (var i = 1; i < array.length; i++)
    array[i-1] = array[i];
    array.length--;

  return firstArray;

}