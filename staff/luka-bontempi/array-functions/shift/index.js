 /**
 * 
 * 
 * @param {Array} array 
 * 
 * @param {Function} expression 
 * 
 * @returns {boolean} 
 * 
 *  
 */

function shift(array) { 
    var firstItem = array[0];
    for(var i = 1; i<array.length; i++)
        array[i-1] = array[i];
    array.length--;
    return firstItem;
 }