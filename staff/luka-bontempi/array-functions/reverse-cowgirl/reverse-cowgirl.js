/**
 * Pops the last number out of an array.
 * 
 * @param {Array} array The array to pop an elements from.
 * 
 * @returns {number} The popped element.
 */
array =[1,2,3,4,5,6]
function reversecowgirl(arr) {
    for (var i=0;i<(Math.round(arr.length)/2)-1;i++){
        var joker=arr[i]
        arr[i]=arr[arr.length-i-1]
        arr[arr.length-i-1]=joker
        
    }
    return arr
}
try{
    reversecowgirl(arr)
}catch(e){
    console.log(e.messager)
}
console.log(reversecowgirl(array))