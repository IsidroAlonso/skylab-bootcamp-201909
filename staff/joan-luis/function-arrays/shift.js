//Eliminar el primer elemento de un array

var arrayNumbers=[1,2,3,4,5,6];
/**
 * 
 * @param {array} array 
 */
function deleteFirtsElement(array){
   if (!(array instanceof Array)) throw TypeError (array + ' is not array');
   if (array.length==0){
      alert("empty element");
   }
   var cointainerArray=[];
   for (i=1;i<array.length;i++){
      cointainerArray+=array[i];
   }
   array.length=0;
   for(var i=0;i<cointainerArray.length;i++){
      array[i]=cointainerArray[i];
   }
   return array;
}

/**
 * 
 * @param {array} array 
 * @param {funcion} expresion 
 */
function shift(array,expresion){
   if (!(array instanceof Array)) throw TypeError (array + ' is not array');
   if (typeof expression !== 'function') throw TypeError(expression + ' is not a function');
   return array=expresion(array);
}

console.log(shift(arrayNumbers,deleteFirtsElement));

