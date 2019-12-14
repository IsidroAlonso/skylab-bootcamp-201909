var myArray=['Joan', 'Pepeño','Antonio', 'Fermindelapraderaderioarriba'];
var mySecondArray=[1,2,5,8,9];
/**
 * 
 * @param {array} arrayOne array con elementos las cuales se fusionaran con la segunda 
 * @param {array} arraySecond serà concatenada despues del ultimo elemento de la arrayOne.
 */
function mergeArrays(arrayOne,arraySecond){
   if (!(arrayOne instanceof Array)) throw TypeError (arrayOne + " is not array");
   if (!(arraySecond instanceof Array)) throw TypeError (arraySecond + " is not array");

   var arrayResult=[];
   arrayResult+=arrayOne +arraySecond;
  
   return arrayResult;
}

/**
 * 
 * @param {funcion} expresion recibe la funcion mergeArrays
 */
function concat(expresion){
   if (typeof expression !== 'function') throw TypeError(expression + ' is not a function');
   var arrayAdd=[];
   return arrayAdd+=expresion(myArray,mySecondArray);
}

console.log(concat( mergeArrays));