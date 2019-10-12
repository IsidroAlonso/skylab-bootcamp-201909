/**
 * fills (modifies) all the elements of an array from a start index (default zero) to an end index (default array length) with a static value. It returns the modified array.
 * 
 * @param {Array} array the array to iterate
 * @param {...number} filledValue value to filled in each element of the array
 * @param {...number} start initial value to fill if it's expressed, if not is undefined
 * @param {...number} end final value to fill if it's expressed, if not is undefined
 * 
 */

function fill(array, filledValue, start, end) {

    for (var i = 0; i < array.length; i++) {

        if (i >= start && i < end) {
            for (var j = start; j < end; j++) {
                array[j] = filledValue;
            }
        }
        
        if (i >= start && end === undefined) {
            for (var j = start; j < array.length; j++) {
                array[j] = filledValue;
            }
        }

        if (start === undefined && end === undefined) {
            array[i] = filledValue;
        }
        
        // debugger;

    }

    return array;

}