console.log('DEMO map');

var array = [1, 2, 3];

console.log('should create a new array applying the expression');
var a = map(array, function(b){
                return b+1;
            })
console.log(a); // [2, 3, 4]

console.log('should create a new array multipling items');
var a = map(array, function(b){
    return b*3;
})
console.log(array); // [3, 6, 9]