
 /**
 * Finds the index of the first element of an array that meets the test function provided 
 * 
 * @param {Array} array The array to evaluate elements to the condition given 
 * 
 * @param {Function} expression The expression to evaluate in each item of the array.
 * 
 * @returns {number} returns the index of the first element that meets the function, otherwise it returns -1.
 * 
 */


function findIndex(array,expression) { 
    var newArray = []
    
    for(i = 0; i < array.length; i++) {
        
        if(expression(array[i])) {
            newArray[newArray.length] = i;
        }
    }

    if(newArray.length === 0) {
        return -1;
    }
    else{
        return newArray[0];
    }
}

