
 /**
 * Returns the index within the string oject that makes the call, of the first ocurrence of the specified value,
 * starting the search from index from or -1 if that value is not found.  
 * 
 * @param {Array} array The array to evaluate elements to the condition given 
 * 
 * @param {Function} expression The expression to evaluate in each item of the array.
 * 
 * @returns {number} returns the index of the element that meets the function, otherwise it returns -1.
 * 
 */



function indexOf(array, item) { 
    var newArray = [] 
    
    for(i = 0; i < array.length; i++) { 
        
        if(array[i] === item) {
            newArray[newArray.length] = i;
        }
    }
    if(newArray.length === 0) {
        return -1;
    }
    else {
        return newArray[0];
    }
}


      
