/**
 * determines whether an array includes a certain value among its entries, returning true or false as appropriate.
 * 
 * @param {Array} array the array to itearte
 * @param {Array} valueToSearch the value you have to search in each element of the array
 * 
 */

function includes(array, valueToSearch) {

    for(var i = 0; i < array.length; i++) {

        if (array[i] === valueToSearch){
            // debugger;
            return true;
        }    
    }
    return false;
}