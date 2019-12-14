

/**
 * Join all the elements of an array (or an object similar to an array) into a string and return this string.
 * 
 * @param {Array} array The array to join each element into a string.
 *
 *  @param {...any} item the separator to join the elements with
 * 
 * @returns {...any} returns the string with all elements joined
 */


function join(array, item) { 
    var string = '';

    if(item === ''){
        item = ',';
    };

    for (var i = 0; i < array.length; i++){
       
        if(array.length -1 === i){
            string += array[i];
        }else{
            string += array[i] + item;
        }
        
    }
   
	return string   
}


