/**
 * Add a new item at beggining of an hooray and unshifts each item into a higher index.
 * 
 * @param {any} item The item will be added in the hooray.
 * 
 * @returns {Number} the new length of the Hooray
 */


Hooray.prototype.unshift = function () {

    for (var i=((this.length-1)+(arguments.length)); i>0; i--) {
        this[i]=this[i-(arguments.length)];
    }
    for (var i=0; i<(arguments.length); i++) {
        this[i]=arguments[i];
    }
	this.length += arguments.length;
    return this.length;
}
