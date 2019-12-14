/**
 * Deletes last item of an array
 * 
 * @param {Array} array The array to delete last item.
 *  
 * @returns {number} The item that was eliminated
 */

function pop(array) { 

    if(array.length === 0) return undefined;
	    
    var last = array[array.length - 1];
    
    array.length = array.length - 1;
    
    return last;  

}



