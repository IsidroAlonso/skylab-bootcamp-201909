/**
 * To join two or more arrays. This method does not change existing arrays.
 * 
 * @param {...any} item The items array to start joining.
 * 
 * @param {...any} item The item (or items) to join.
 * 
 * @returns {Array} the new array created with all items joined
 */

function concat(item, item) { 
    var newArr = array;
    var index = newArr.length;

	for(var i = 1; i < arguments.length; i++){
        if(item instanceof Array){
            for(var j = 0; j < arguments.length; j++){

                newArr[index] = arguments[i][j];
                index++;        
            }
        }
         else {
            newArr[index] = arguments[i];
            index++;
        }
    }
	return newArr
}