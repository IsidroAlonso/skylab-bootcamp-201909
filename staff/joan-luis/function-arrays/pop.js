



var worker=['Antonio', 'Juan', 'Francisco','Javi', 'Alex'];
/**
 * 
 * @param {*} array 
 */
function removeLastElement(array){
   if (!(array instanceof Array)) throw TypeError (array + ' is not array');
   var newArray=[];
   var newIndex=array.length-1;
   for (var i=0; i<newIndex;i++) {
      newArray[i]=array[i];
   }
   array.length=0;
   for (var i=0;i<newArray.length;i++){
      array[i]=newArray[i];
   }
   return array;
}

/**
 * 
 * @param {array} auxArray del que eliminamos su ultimo elemento
 * @param {funcion} expresion funcion realiza la accion de eliminar ultimo elemento del array
 */
function pop(auxArray,expresion){
   if (!(auxArray instanceof Array)) throw TypeError (auxArray + ' is not array');
   if (typeof expression !== 'function') throw TypeError(expression + ' is not a function');
   return auxArray=expresion(auxArray);
}

console.log(pop(worker,removeLastElement));

