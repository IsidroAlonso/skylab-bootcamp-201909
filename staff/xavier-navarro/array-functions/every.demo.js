console.log('DEMO every');

var array = [1, 30, 39, 29, 10, 40];

function isBelowThreshold(currentValue) {
    return currentValue < 20; // check i currentValue is less than 20
}
console.log('should check the array and return true or false depending on whether all elements meet the expression');
console.log(every(array,isBelowThreshold)); // false