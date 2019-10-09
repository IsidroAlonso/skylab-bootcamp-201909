/**
 * 
 * @param {Array} array
 * @param {Function} expression
 * 
 * @throws {TypeError} If an array is not an array, or is not a function
 */

function slice(array, posinit, posfinal) {
    if (!(array instanceof Array)) throw array + ' is not a function';
    
    for(i = 0; i < array.length; i++)
    if (posinit <= array.length[i])
        posinit = array[i];
        posinit++;
    
    for(i = 0; i < array.length; i++)
    if (posfinal <= array.length[i])
        posfinal = array[i];
        posfinal--;

    return [posinit, posfinal]

}