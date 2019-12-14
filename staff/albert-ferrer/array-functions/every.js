/**
 * tests whether all elements in the array pass the test implemented by the provided function. It returns a Boolean value. 
 * 
 * @param {Array} array Array where they have to pass the condition given in the function
 * @param {expression} function Function that applies the changes
 * @returns {boolean} return true if the condition is met and false if it is not met.
 */


 function every (array,expression){
    var condicion = true;

    for (let i= 0; i < array.length; i++){
       console.log(array[i]);
        if (!expression(array[i])){

            condicion = false;
            break;
        }
    
    }
    return condicion;
 }

 every(numbers,comprobarPares);


 