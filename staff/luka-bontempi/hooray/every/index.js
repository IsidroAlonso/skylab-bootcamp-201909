   /**
 * Checks if all the elements in the hooray pass the condition implemented by the given function
 * 
 * @param {Hooray} hooray The hooray to evaluate elements to the condition given 
 * 
 * @param {Function} expression The expression to evaluate in each item of the hooray.
 * 
 * @returns {boolean} returns true if all the elements in the hooray pass the condition; otherwise, false.
 * 
 */



Hooray.prototype.every = function (expression) {
	if (typeof expression !== 'function') throw TypeError(expression + ' is not a function');
	
    for (let i = 0; i < this.length; i++) {
        if (!expression(this[i])) return false;
    }
    return true;
};