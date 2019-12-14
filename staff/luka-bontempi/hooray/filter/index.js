/**
 * Return a Hooray with the items that accomplish the expression provided as a parameter
 * 
 * @param {Function} expression The expression that evaluates the items to be returned.
 * 
 * @returns {Hooray} The Hooray with the items that accomplish the expression provided on the 
 *                   calling hooray. If there're no items that accomplish, returns an empty Hooray.
 * 
 * @throws {TypeError} If the expression is not a function.
 */

Hooray.prototype.filter = function (expression) {
    if (typeof expression !== 'function') throw TypeError(expression + ' is not a function');

    var results = new Hooray;

    for (i=0; i<this.length; i++) {
        if (expression(this[i])) {
            results[results.length++]=this[i];
        }
    }
    return results;
}
