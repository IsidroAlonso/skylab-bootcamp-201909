/**
 * MAP. Iterates on every item of a hooray and manipuates it according to a function.
 * It returns the new hooray with items modified.
 * 
 * @param {Hooray} hooray The to get items.
 * @param {Function} function that specifies what to do with the hooray items (add 2)
 * 
 * @returns {Hooray} The new hooray.

 * @throws {TypeError} If Function is not a function.
 */

Hooray.prototype.map = function(expression) { 
  
    if(!(expression instanceof Function)) throw TypeError(expression + ' is not a function');
    
    var result = new Hooray();
    for (i = 0; i < this.length; i++) {
		result[i] = expression(this[i]);
		result.length++;
    }
    return result;
}
