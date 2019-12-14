


/**
 * 
 * @param {Array} paramArray array que contiene los a buscar
 * @param {Function} expresion elemento que queremos buscar
 */
function find(array, expression){
   if (!(array instanceof Array)) throw TypeError (auxArray + ' is not array');
   if (typeof expression !== 'function') throw TypeError(expression + ' is not a function');
  
   
   for(var i=0; i<array.length;i++){
      if (expression(array[i])) {
         return array[i];
      }
   }   
   return undefined;
}






