/**
 * Removes the last item of the array, and return it
 * 
 * @returns {any} return the last item, now removed
 * 
 * 
 */

 
Hooray.prototype.pop = function() {
    if (this.length === 0) return undefined;

    var lastElement = this[this.length - 1];
    delete this[this.length - 1];
    this.length = this.length - 1;

    return lastElement
}