

var arrayNumbers=[1, 2, 3,4,5];
/**
 * 
 * @param {array} num representa un elemento de un array al cual sumamos seis
 */
function addSix(num){
   return num+6;
}

/**
 * 
 * @param {array} auxArray contiene los elemento a los que iremos sumandole seis
 * @param {funcion} expression realiza la suma un elemeno 
 */
function map(auxArray,expression){
   var newArray=[];
   
   for (var i=0 ; i<auxArray.length ; i++){
      newArray[i] = expression(auxArray[i])
   }
   return newArray;
}


console.log(map(arrayNumbers,addSix))