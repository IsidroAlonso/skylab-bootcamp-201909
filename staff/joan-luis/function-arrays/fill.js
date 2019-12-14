var arrayPrueba=[2,5,4,9,3,];
/**
 * 
 * @param {array} array 
 * @param {string} valeuRemplace valor por la que ha de ser cambiada el elmento primitivo del array
 * @param {integer} indexFrom indice del primer elemento a modificar
 * @param {integer} indexEnd indice del ultimo elemento a modificar
 */

function changeElementsByElement(array,valeuRemplace,indexFrom,indexEnd){          
   if (!(array instanceof Array)) throw TypeError (array + ' is not array');
   if ((typeof valeuRemplace==='undefined')) throw TypeError (valeuRemplace + ' is undefined');
   if ((typeof indexFrom==='undefined')) throw TypeError (indexFrom + ' is undefined');
   if ((typeof indexEnd==='undefined')) throw TypeError (indexEnd + ' is undefined');
   for (indexFrom;indexFrom<indexEnd;indexFrom++){
      array[indexFrom]=valeuRemplace;
   }
   return array;
}

/**
 * 
 * @param {array} array a modificar el cual queremos modificar los elemntos
 * @param {function} expresion funcion changeElementsByELement invocada y realiza el cambio
 */
function fill(array,expresion){
   if (!(array instanceof Array)) throw TypeError (array + ' is not array');
   if ((typeof valeuRemplace!='string')) throw TypeError (valeuRemplace + ' is not a string');
   return array=expresion(array,2,2,4);
}

console.log(fill(arrayPrueba,changeElementsByElement));