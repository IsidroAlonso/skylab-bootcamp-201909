


/**
 * 
 * @param {Array} paramArray array que contiene los a buscar
 * @param {String} elementfind elemento que queremos buscar
 */
function find(paramArray,elementFound){
   debugger
   if (!(paramArray instanceof Array)) throw TypeError (paramArray + ' is not array');
   if ((typeof elementFound!='function' )) throw TypeError (elementfind + ' the element is not a function');
   
   var isFound=elementFound;
      for(var i=0; i<paramArray.length;i++){
      if (paramArray[i]==elementfind) {
         isFound=true;
         break;
      }
   }
   return isFound;
}

function elementFound(elemento){
  if (typeof elemento==='') throw TypeError (elemento + ' the element is not defined')
   return Elemento;
};


