console.log('DEMO map')


array = [2,3,4,5,6];

var mapeada=map(array, function(x){
    return x * 10;
});

console.log(mapeada);

var mapeada2= map(array, function(x){
    return x / 2;
});

console.log(mapeada2);