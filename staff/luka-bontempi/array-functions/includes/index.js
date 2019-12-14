
 /**
 * Determines if an array includes a certain element
 * 
 * @param {Array} array The array to evaluate elements to the element given 
 * 
 * @param {...any} item The item (or items) to evaluate
 * 
 * @returns {boolean} returns true if the array includes a certain element; otherwise, false.
 */



function includes(array,item) { 
    var isElement = false;
    for (i = 0; i < array.length; i++) {
        if(item === array[i]) {
        isElement = true;
        }
    }   
    return isElement
}

