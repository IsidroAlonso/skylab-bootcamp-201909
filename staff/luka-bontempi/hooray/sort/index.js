/**
 * Sorts the elements of an hooray locally. Responds to the position of the string value according to its Unicode value.
 *  
 * @param {Hooray} hooray The hooray to sort
 * 
 * @returns {Hooray} Returns the hooray with sorted elements
 */

Hooray.prototype.sort = function () {
    
    var sorted = false;
    var aux;

    var expression = arguments [0] || (function (a,b) { return b < a ? 1 : -1 });

    if (typeof expression !== 'function') throw TypeError(expression + ' is not a function');


    while (!sorted) {
        sorted = true;
        for (var i=0; i<this.length-1; i++){
            
            if ((expression(this[i].toString().charCodeAt(0),this[i+1].toString().charCodeAt(0))>0)) {
                aux = this[i+1];
                this[i+1] = this[i];
                this[i] = aux;
                sorted = false;
            }
        }
    }
}
