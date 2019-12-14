 /**
 * Returns the index within the string oject that makes the call, of the first ocurrence of the specified value,
 * starting the search from index from or -1 if that value is not found.  
 * 
 * @param {Hooray} hooray The hooray to evaluate elements to the condition given 
 * 
 * @param {Function} expression The expression to evaluate in each item of the hooray.
 * 
 * @returns {number} returns the index of the element that meets the function, otherwise it returns -1.
 * 
 */

Hooray.prototype.indexOf = function (item) {
    var start = arguments[1] || 0;

    if (typeof(start) !== "number") start=0;

    start = start < 0 ? this.length + start : start;

    for (var i=start; i<this.length; i++) {
        if (this[i]===item) return i;
    }
    return -1;
}
