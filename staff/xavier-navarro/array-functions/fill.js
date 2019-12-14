/**
 * Fill the array to iterate with the item that you sent
 * 
 * @param {Array} array The array to iterate.
 * @param {*} newItem Character by which we will replace items from array
 * 
 */
function fill(array,newItem){
  if (!(array instanceof Array)) throw TypeError (array + ' is not an array');
  var start = 0;
  var end = array.length;
  switch(arguments.length){
    case 3:
      start = arguments[2];
      break;
    case 4:
      start = arguments[2];
      end = arguments[3];
      break;
    default:
        if (arguments.length < 2 ) newItem = undefined;
      break;
  }
  
  for(var i = start; i < end; i++){
      array[i] = newItem;
    }  
}