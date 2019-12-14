/**
 * Sort the array converting it's elements into string and then
 * comparing their sequences of UTF-16 code units values.
 * 
 * @param {Array} array The array to iterate.
 * @param {Function} expression Character by which we will replace items from array
 * 
 * @returns {Array} Returns the sorted array
 */

function sort(array, expression){
  if (!(array instanceof Array)) throw TypeError (array + 'is not an array');
  if (!(expression instanceof Function) && expression !== undefined) throw TypeError ('The comparison function must be either a function or undefined');

  if (typeof expression === 'function' && expression(1, 1) === 0) {
    return desc(array);
  }else{
    return asc(array);
  }
}
function desc(array){
  var temp
  for(var one = 0; one < array.length; one++){
    for(var two = 0; two < array.length; two++){
       if(array[one].toString() > array[two].toString()){
          temp = array[one]
          array[one] = array[two]
          array[two] = temp
      }
    }
  }
  return array;
}

function asc(array){
  var temp
  for(var one = 0; one < array.length; one++){
    for(var two = 0; two < array.length; two++){
       if(array[one].toString() < array[two].toString()){
          temp = array[one]
          array[one] = array[two]
          array[two] = temp
      }
    }
  }
  return array;
}
