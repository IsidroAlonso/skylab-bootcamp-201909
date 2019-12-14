/**
 * Removes the first element from an array and returns that element. This method changes the length of the array.
 * 
 * @param {Array} array First array that you want to concatenate.
 * 
 * @param {arguments} - All arguments that you want to concatenate.
 * 
 * @returns {aux} Returns a new array concatenating past arguments
 */
function concat(array) {
	var aux = array;
	var cont = array.length;
	 for (var i = 1; i < arguments.length; i++) {
	   if(arguments[i] instanceof Array){
		 for (var j = 0; j < arguments[i].length; j++) {
			 aux[cont] = arguments[i][j];
			 cont++;
		 }
		}else{
		   aux[cont] = arguments[i];
			 cont++;
		 }    
	 }
	 return aux;
  }