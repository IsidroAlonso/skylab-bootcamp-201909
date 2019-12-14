/**
 * 
 *
 * @param {String} elementfind the element to find
 */


Hooray.prototype.find=function(elementfind){
   
    
    if ((typeof elementfind ==='undefined')) throw TypeError (elementfind + ' is not');
    
    var isFound=false;
 
    for(var i=0; i<this.length;i++){
       if (this[i]===elementfind) {
          isFound=true;
          break;
       }
    }
    return isFound;
 }
