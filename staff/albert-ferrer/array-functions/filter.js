/**
 * creates a new array with all elements that pass the test implemented by the provided function.
 * 
 * @param {Array} array array with the values to examinate.
 * @param {Function} expression the condition that it must be acomplished.
 * @returns {Array} aux 
 */
function filter (array,expression){
 var aux=[];
 //var contador=0;
for (var i= 0; i < array.length; i++){
  if( expression(array[i])){
      aux[aux.length]=array[i];
     // contador++;
  };
}
 return aux;
}



