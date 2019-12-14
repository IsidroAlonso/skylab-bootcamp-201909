/**
 * determines whether an array includes a certain value among its entries, returning true or false as appropriate.
 * 
 * @param {Array} array array that includes a values.
 * @param {number} element value to search for.
 * @param {number} fromIndex position in this array at which to begin searching for value to find. 
 */

function includes(array, element,fromIndex){ 
    for (var i=0 || fromIndex; i < array.length; i++){
        if(element === array[i]){ return true;};
    }
    return false;
};

