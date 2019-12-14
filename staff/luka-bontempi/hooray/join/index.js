/**
 * 
 *  @param {...any} item the separator to join the elements with
 * 
 * @returns {...any} returns the string with all elements joined
 */

Hooray.prototype.join = function(sep){

    if(sep === undefined)
        sep =',';
    result = '';
    for (var i = 0; i < this.length; i++) {
        if (i === this.length - 1)
            result += this[i];
        else
            result +=this[i] + sep;
	} 
    return result;
}
