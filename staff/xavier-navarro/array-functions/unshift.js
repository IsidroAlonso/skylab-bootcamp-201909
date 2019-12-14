/**
 * Add items at the start of the array
 * 
 * @param {Array} array The array to remove elements to.
 * 
 * @returns {Items} Return the removed item
 */
var array = [1,2,3,4]
var items = ["a","b"]

function unshift(array, items) { 
  var itemsLen = items.length;
  var arrLen = array.length;
  for(var i = 0; i< itemsLen; i++){
    array[arrLen+i] = null
  }
  var newLen = array.length-1;
  for(var e = newLen; e >= 0; e--){
    array[e] = array[e-itemsLen]
    if(e === newLen-arrLen){
       break
      }
  }
  for(var o = 0; o<itemsLen; o++){
         array[o] = items[o];
       }
  return array
}