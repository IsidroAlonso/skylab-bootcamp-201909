/**
 * 
 * 
 * @param {*} hooray The hooray to concatenate elements to newHooray
 * @param {*} arguments the content to be checked whether it's present in the hooray or not
 * 
 * 
 * @returns newHooray contains: hooray + arguments.
 * 
 */
Hooray.prototype.includes  = function() { 	    
    var finded = true;
    var indicator = true;
    for (var i = 0; i < arguments.length && finded; i++) {
        indicator = true;
        for (var j = 0; j < this.length&&indicator; j++) {
            if (arguments[i]===this[j]) {
               indicator = false               
            }              
        } 
        if (indicator) finded=false;     
    }       
    return finded;
    
};