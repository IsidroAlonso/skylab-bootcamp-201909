
 /**
 * Adds one or more elements to the beginning of an array and returns the new length of the array.
 * 
 * @param {Array} array the array to add elements in
 * 
 * @param {*} items to add at the beginning of the array 
 * 
 * @returns {Number} returns the new length of the array
 * 
 *  
 */


function unshift(array) {
    
  if (!(array instanceof Array)) throw TypeError("unshift this is not an array");
  var inc;

  var item = arguments.length - 1;
  var length = array.length;
  for (var i = length - 1; i >= 0; i--){
      array[i + item] = array[i]
  }
  for (var j = inc; j < arguments.length; j++)
      array[j - inc] = arguments[j];
  
  return array.length;
}
