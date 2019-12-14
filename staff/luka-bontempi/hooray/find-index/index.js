 /**
 * 
 * returns the index of the first element in the hooray that satisfies the provided 
 * testing function. Otherwise, it returns -1, indicating that no element passed the test.
 * 
 * @param {*[]} hooray 
 * @param {*} expresion 
 * 
 */

Hooray.prototype.findIndex = function (expression) {
    if (typeof expression !== 'function') throw TypeError(expression + ' is not a function');
    
    for (i=0; i<this.length; i++) {
        if (expression(this[i])) return i;
    }
    return -1;
}