var number=[1,2,3,4,5]

function suffle (array){
  
  var indices=array.lenght
  var rdnArray=[];
  
  for (var i=0; i<number.lengh;i++){
    var indice=(Math.random() * (indices - 0) + 1);
    rdnArray[i]=number[indice];
  }
  return rdnArray;
}

