/**
 * Sorts the elements of an array locally. Responds to the position of the string value according to its Unicode value.
 *  
 * @param {Array} array The array to sort
 * 
 * @returns {Array} Returns the array with sorted elements
 */



function sort(array) {
    if (!(array instanceof Array)) throw TypeError(array + ' is not an array');
    
    for (i = 1; i < array.length; i++) {
        for (j = 0; j < (array.length - i); j++) {
            if (array[j] > array[j + 1]) {
                aux = array[j];
                array[j] = array[j + 1];
                array[j + 1] = aux;
            }
        }
    }

    return array
}



      
