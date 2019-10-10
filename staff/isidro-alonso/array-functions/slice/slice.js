/**
 * 
 * @param {Array} array
 * @param {Function} expression
 * 
 * @throws {TypeError} If an array is not an array, or is not a function
 */

function slice(array, posinit, posfinal) {
    if (!(array instanceof Array)) throw new TypeError(array + ' is not an array');

    var result = [];

    posinit = posinit || 0;
    posinit = posinit < 0? array.length + posinit : posinit;
    posfinal = posfinal || array.length;
    posfinal = posfinal < 0? array.length + posfinal : posfinal;
    
    for(i = posinit; i < posfinal; i++)
        result[i - posinit] = array[i];

    // result.length = posinit - posfinal;

    return result;

}