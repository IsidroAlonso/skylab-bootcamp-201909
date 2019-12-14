
/**
 * Executes a reducing function on each element of an array
 * 
 * @param {Array} array The array to evaluate elements to the condition given 
 * 
 * @param {*} expression function to reduce the array
 * 
 * @returns {number} returns the unic value for the array
 */


function reduce(array, expression){
    // TODO: handler error

    var accumulator = 0;
    
    for (var i = 0; i < array.length; i++){
        if (i === 0) {
            expression(0, array[i], i, array);
        }

        if(i === 1){
            accumulator = expression(array[0], array[i], i, array);
        }

        if(i > 1) {
            accumulator = expression(accumulator, array[i], i, array);
        } 
    };
		
    return accumulator;
};