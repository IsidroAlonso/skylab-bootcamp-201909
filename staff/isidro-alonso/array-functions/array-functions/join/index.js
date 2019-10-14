/**
 * creates and returns a new string by concatenating all of the elements in an array (or an array-like object), separated by commas or a specified separator string. If the array has only one item, then that item will be returned without using the separator.
 * 
 * @param {Array} array the array to iterate
 * @param {...} separator the element that you need to 
 */

function join(array, separator) {
    
    if (typeof array === 'undefined') { throw TypeError('Cannot read property \'undefined\' of undefined') };

    var newArray= [];

    if (separator === undefined) {

        separator = ',';

        array[i] += separator;

    }

    for (var i = 0; i < array.length; i++) {

        newArray += array[i];

        if(i < array.length-1) {

            newArray += separator;

        }
        
        // debugger;
        
    }
    
    return newArray;

}