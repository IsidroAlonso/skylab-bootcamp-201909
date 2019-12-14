
function Hooray() {
    for (var i = 0; i  < arguments.length; i++)
        this[i] = arguments[i];

    this.length = arguments.length;
}

//FOREACH//

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

//PUSH//

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


//SLICE//

/**
 * Copies a part of the hooray within a new hooray starting from beginning
 *  to end (end not included). The original hooray will not be modified.
 * 
 * @param {number} begin Index for starting position 
 * 
 * @param {number} end Indez for ending position 
 * 
 * @returns {Hooray} New hooray with the extracted values 
 */



Hooray.prototype.slice = function(begin, end) {
	
    var result = []; 

    begin = begin || 0;
    begin = begin < 0? this.length + begin : begin;
    end = end || this.length;
    end = end < 0? this.length + end : end;

    for (var i = begin; i < end; i++)
        result[i - begin] = this[i];

    
    return result;
}

//SPLICE//

/**
 * 
 * Changes the contents of an hooray by removing or replacing
 *  existing elements and/or adding new elements in place.
 * 
 * @param {Number} start Index for starting position.
 * @param {Number} delCount Index for the last position.
 * @param {*} items Index for the last position.
 * 
 * @returns {Hooray} An hooray containing the deleted elements.
 * If only one element is removed, an hooray of one element is returned.
 *  If no elements are removed, an empty hooray is returned.
 */


Hooray.prototype.splice = function(start, delCount) { 
    //if (typeof end === 'undefined') end = hooray.length;
	// if (typeof expression !== 'function') throw TypeError(expression + ' is not a function');
	var result = new Hooray; // nuevo hooray con los elementos eliminados
	var newHooray = []; // introducir nuevos valores del hooray original
	var x = 0; // iniciar el bucle y recorrer el hooray
	var arrPos = 0; // indice para colocar los elementos correctamente
	var itemsLen; // longitud de los items a introducir
	var items = []; // items a introducir
	

	if(delCount === 'undefined'){ // si no hay elementos a eliminar
		itemsLen = arguments.length-1;
		var index = 1;
	}else if(arguments.length === 2 && start !== 'undefined' && start >= 0 && delCount !== 'undefined'){ // si no hay items a introducir
		var index = 0;
		itemsLen = 0;
	}else if(arguments.length === 1){ // si solo se introduce un parámetro numérico 
		delCount = this.length-start;
		itemsLen = this.length-start;
	} else if(start < 0){ // si start es negativo
		itemsLen = arguments.lenght - delCount + start;
		start = this.length+start;
	}else{ // si introducimos todos los parametros 
		itemsLen = arguments.length-2
		var index = 2;
	}
	
	// extracción de items de arguments y guardarlos en var items
	if(itemsLen !== 0){
		var finalLength = this.length-delCount;
		for(var y = 0; y<itemsLen; y++){
			items[y] = arguments[index];
			index++;
		}
	}else {
		var finalLength = this.length-delCount+itemsLen;
	}
	// guardar items eliminados en el hooray results
	for (var i = 0; i < delCount; i++) {
		result[i] = this[i+start];
		result.length++;
	}
	//bucle para colocar los items correctamente en el new hooray
	var lol = false;
	while (x < finalLength) {
		if(x === start && lol === false){
			for(var y =0; y<delCount; y++){
				arrPos++
			}
			if(itemsLen !== 0){
				for(var y = 0; y<itemsLen; y++){
					newHooray[x] = items[y]
					x++
				}
			}
			lol = true
		}else{
			newHooray[x] = this[arrPos] 
			x++
			arrPos++
		}
	}
	// arreglar lenght del hooray original y añadir items(si hay)
	for(var i = 0; i<this.length;i++){
		this[i] = newHooray[i]
	}

	for(var x = delCount; x>0; x--){
		delete this[this.length-1];
		this.length--
	}
    return result;
};

//FILL//

/**
 * Fill the hooray to iterate with the item that you sent
 * 
 * @param {Hooray} hooray The hooray to iterate.
 * @param {*} newItem Character by which we will replace items from hooray
 * 
 */
Hooray.prototype.fill = function(newItem){
	var start = 0;
	var end = this.length;
	
	switch(arguments.length){
	  case 2:
		start = arguments[1];
		break;
	  case 3:
		start = arguments[1];
		end = arguments[2];
		break;
	  default:
		  if (arguments.length < 1 ) newItem = undefined;
		break;
	}

	for(var i = start; i < end; i++){
		this[i] = newItem;
	  }  
	  
  };


// Every //

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

// Concat //

// --------------------------CONCAT--------------------------------------
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


//Filter//

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


// FIND //

/**
 * 
 *
 * @param {String} elementfind elemento que queremos buscar
 */


Hooray.prototype.find=function(elementfind){
   
    
    if ((typeof elementfind ==='undefined')) throw TypeError (elementfind + ' is not');
    
    var isFound=false;
 
    for(var i=0; i<this.length;i++){
       if (this[i]===elementfind) {
          isFound=true;
          break;
       }
    }
    return isFound;
 }


 // FIND INDEX //

 /**
 * 
 * returns the index of the first element in the hooray that satisfies the provided 
 * testing function. Otherwise, it returns -1, indicating that no element passed the test.
 * 
 * @param {*[]} hooray 
 * @param {*} expresion 
 * 
 */

Hooray.prototype.findIndex = function (expression) {
    if (typeof expression !== 'function') throw TypeError(expression + ' is not a function');
    
    for (i=0; i<this.length; i++) {
        if (expression(this[i])) return i;
    }
    return -1;
}

// INCLUDES //

/**
 * 
 * 
 * @param {*} hooray The hooray to concatenate elements to newHooray
 * 
 * 
 * @returns newHooray contains: hooray + arguments.
 * 
 */
Hooray.prototype.includes  = function() { 	    
    var finded = true;
    var continua = true;
    for (var i = 0; i < arguments.length && finded; i++) {
        continua = true;
        for (var j = 0; j < this.length&&continua; j++) {
            if (arguments[i]===this[j]) {
               continua = false               
            }              
        } 
        if (continua) finded=false;     
    }       
    return finded;
    
};

//INDEXOF//
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


// JOIN //

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



// MAP //

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


// POP //
/**
 * Deletes last item of an hooray
 * 
 * @param {Hooray} hooray The hooray to delete last item.
 *  
 * @returns {*} The item that was eliminated
 */

Hooray.prototype.pop = function (){
    if (this.length === 0) { return undefined };
	var aux = this[this.length -1];
	
	delete this[this.length - 1];
	this.length--;
    return aux;
}

//	REDUCE//

/**
 * Executes a reducing function on each element of an hooray
 * 
 * @param {Hooray} hooray The hooray to evaluate elements to the condition given 
 * 
 * @param {*} expression function to reduce the hooray
 * 
 * @returns {number} returns the unic value for the hooray
 */

Hooray.prototype.reduce = function (expression) {
    
    if (typeof expression !== 'function') throw TypeError(expression + ' is not a function');
    if (this.length === 0) throw TypeError("Reduce of empty hooray with no initial value");
    
    var result=0;
    for (i=0; i<this.length; i++) {
        result=expression(result,this[i]);
    }
    
    return result;
}


// REVERSE //
 /**
 * Invert the order of the elements of an hooray in place, the first element becomes the last and the last
 * becomes the first.
 * 
 * @param {Hooray} hooray The hooray to evaluate elements to the condition given 
 * 
 * @returns {Hooray} returns the hooray inverted
 * 
 *  
 */

Hooray.prototype.reverse = function() {

    var firstIndex = 0;
    var endIndex = this.length - 1; 
  
      if(endIndex > firstIndex){
        for(var i = 0; i < endIndex; i ++)
          {var temp = this[firstIndex];
          this[firstIndex] = this[endIndex];
          this[endIndex] = temp;
          firstIndex++;
          endIndex--;
          }
      }

    return this;
};


// SHIFT //

/**
 * Delete the first element of elements
 * 
 * 
 * @returns {elementDeleted} return element deleted.
 */


Hooray.prototype.shift = function() { 
	var elementDeleted = this[0]
	for (var i = 1; i < this.length; i++) {
		this[i-1] = this[i]; 
	}
	delete this[this.length-1]  
    this.length = this.length - 1;
    return elementDeleted;
};

// SOME //

/**
 * 
 * Checks if at least one element of the hooray complies with the condition implemented by the specific function.
 *
 * @param {Hooray} hooray 
 * @param {Function} expression we use to test the elements. 
 * 
 * @returns {boolean} true if any of the elements match with the condition or false if any of them match.
 *  
 */ 


Hooray.prototype.some = function(expression) {  
    if (typeof expression !== "function") throw new TypeError(expression + " is not a function");

    for (i=0; i< this.length; i++){
        if (expression(this[i])){
            return true 
        }
    } 
    return false
};


//SORT //

/**
 * Sorts the elements of an hooray locally. Responds to the position of the string value according to its Unicode value.
 *  
 * @param {Hooray} hooray The hooray to sort
 * 
 * @returns {Hooray} Returns the hooray with sorted elements
 */

Hooray.prototype.sort = function () {
    
    var sorted = false;
    var aux;

    var expression = arguments [0] || (function (a,b) { return b < a ? 1 : -1 });

    if (typeof expression !== 'function') throw TypeError(expression + ' is not a function');


    while (!sorted) {
        sorted = true;
        for (var i=0; i<this.length-1; i++){
            
            if ((expression(this[i].toString().charCodeAt(0),this[i+1].toString().charCodeAt(0))>0)) {
                aux = this[i+1];
                this[i+1] = this[i];
                this[i] = aux;
                sorted = false;
            }
        }
    }
}

//UNSHIFT	//

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
