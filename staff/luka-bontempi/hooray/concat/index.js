/**
 * Concat hooray with arguments and return a new hooray with all hooray elements  + arguments
 * 
 * @param {*} hooray The hooray to concatenate elements to newHooray
 * 
 * 
 * @returns {*} newHooray contains: hooray + arguments.
 * 
 */

Hooray.prototype.concat = function () {
	
    var result= new Hooray();  
	
	for (var i=0; i<this.length; i++){
        result[result.length++]=this[i];
    }

    for (var i=0; i<arguments.length; i++) {
        if (arguments[i] instanceof Hooray) {
            for (var j=0; j<arguments[i].length; j++) {
                result[result.length++]=arguments[i][j];
            }
        } else result[result.length++]=arguments[i];
    }
    return result;
}