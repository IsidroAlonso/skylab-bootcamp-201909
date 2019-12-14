var miArray=[1,2,3,4,5,6]

function addSix(number){
   debugger
   return number=number+6;

}

function forEachRecursive(array,expresion,indice){
   var indice=indice-1;
   if (indice<=0){

      return array;

   }else{
      var numNewItem=(forEachRecursive(array,addSix(array[indice]),(indice))) 
      array[indice]=numNewItem ;
   }
}

console.log(forEachRecursive(miArray,addSix,miArray.length));