/**
 * Used to merge two or more arrays. Not change the existing arrays, but instead returns a new array.
 * 
 * @param {Array} array Initial Array with which the other arrays and/or values will be attached.
 * 
 * @param {Function} expression Complementary array and/or values concatenated to the initial array.Complementary array and/or values concatenated to the initial array.
 *  
 * 
 */

function concat(a,b,c,d) {
    var arrays = a;
    var contador = a.length;
    for (let i = 1; i < arguments.length; i++) {
        if (arguments[i] instanceof Array) {
            for (let j = 0; j < arguments[i].length; j++) {
                arrays[contador] = arguments[i][j];
                contador++;
            } 

        } else {
            arrays[contador] = arguments[i];
            contador++;

        }
    }
}

