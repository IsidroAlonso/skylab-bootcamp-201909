function Hooray() {
    for (var i = 0; i  < arguments.length; i++)
        this[i] = arguments[i];

    this.length = arguments.length;
}

/**
 * Iterates the current hooray and evaluates an expression on each item.
 * 
 * @param {Function} expression The expression to evaluate in each item of the hooray.
 * 
 * @throws {TypeError} If expression is not a function.
 */
Hooray.prototype.forEach = function(expression) {
	if (typeof expression !== 'function') throw TypeError(expression + ' is not a function');

	//throw Error('🤡');
	for (var i = 0; i < this.length; i++) 
		expression(this[i], i, this);
};

/**
 * Pushes a variable number of items into this hooray.
 * 
 * @param {...any} item The item (or items) to push.
 * 
 * @returns {number} The new lenth of the hooray.
 */
Hooray.prototype.push = function() { 

	for (var i = 0; i < arguments.length; i++)
		this[this.length++] = arguments[i];

	return this.length;
};

/**
 * Extract the last element of a hoorray
 * 
 * @param 
 * 
 */

Hooray.prototype.pop = function() {

	var result = this[this.length-1];
	this.length--;

	return result;

}

/**
 * creates a new array with the results of calling a provided function on every element in the calling hooray.
 * 
 * @param {Function} expression the changes that you have to apply to each element of the hooray
 * 
 */

Hooray.prototype.map = function (expression) {

	newArray = [];

	for (var i= 0; i < this.length; i++)
		newArray[i] = expression(this[i]);

	return newArray;

}

// new versions

/**
 * merge two or more hoorays. This method does not change the existing hoorays, but instead returns a new hooray
 * 
 * @param {Array} argument the arrays to iterate
 * 
 * @returns {Array} newArray the new array made with the sum of all the arguments
 */

Hooray.prototype.concat = function () {

    var newHooray = [];
    
    for (var i = 0; i < arguments.length; i++)
        for (var j = 0; j < arguments[i].length; j++)
            newHooray[newHooray.length] = arguments[i][j]
        // debugger;
    
    return newHooray;

}

/**
 * tests whether all elements in the hooray pass the test implemented by the provided function. It returns a Boolean value. 
 * 
 * @param {Function} expression the function to check if the conditions of every array met
 * 
 */

Hooray.prototype.every = function (expression) {

    for(var i = 0; i < this.length; i++)
        var review = expression(this[i]);
        // debugger;
        return review;
        
}

/**
 * fills (modifies) all the elements of an hooray from a start index (default zero) to an end index (default array length) with a static value. It returns the modified array.
 * 
 * @param {...number} filledValue value to filled in each element of the hooray
 * @param {...number} start initial value to fill if it's expressed, if not is undefined
 * @param {...number} end final value to fill if it's expressed, if not is undefined
 * 
 */

Hooray.prototype.fill = function (filledValue, start, end) {

	var newHooray = [];
	
	   for (var i = 0; i < this.length; i++) {

        if (i >= start && i < end) {
			
            for (var j = start; j < end; j++) { /// NO FUNCIONA TE COJE UN VALOR VACIO AL PRINCIPIO
				var newNewHorray = filledValue;
			}
			newNewHorray = newHooray[i];
		}
        
        if (i >= start && end === undefined) {
			var bla;
			for (var j = start; j < arguments.length; j++) { /// NO FUNCIONA TE COJE UN VALOR VACIO AL PRINCIPIO
				bla[j] = filledValue;
			}
			newHorray[i][bla];
			debugger;
		}
		
        if (start === undefined && end === undefined) {
			newHooray[i] = filledValue;
		}
		
    }
	
	return newHooray;
}

/**
 * returns the value of the first element in the provided hooray that satisfies the provided testing function.
 * 
 * @param {Function} expression The expression that puts a condition to finde in each element of the hooray.
 * 
 */

Hooray.prototype.find = function (expression) {

    for(var i = 0; i < this.length; i++) {

        if (expression(this[i])) {
			
            return this[i];

        } 

    }

    return undefined;
	
}

/**
 * determines whether an array includes a certain value among its entries, returning true or false as appropriate.
 * 
 * @param {...} valueToSearch the value you have to search in each element of the array
 * 
 */

Hooray.prototype.includes = function (valueToSearch) {

    for(var i = 0; i < this.length; i++) {

        if (this[i] === valueToSearch){
            // debugger;
            return true;
        }    
    }
    return false;
}