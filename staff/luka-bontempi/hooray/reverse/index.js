 /**
 * Invert the order of the elements of an hooray in place, the first element becomes the last and the last
 * becomes the first.
 * 
 * @param {Hooray} hooray The hooray to evaluate elements to the condition given 
 * 
 * @returns {Hooray} returns the hooray inverted
 * 
 *  
 */

Hooray.prototype.reverse = function() {

    var firstIndex = 0;
    var endIndex = this.length - 1; 
  
      if(endIndex > firstIndex){
        for(var i = 0; i < endIndex; i ++)
          {var temp = this[firstIndex];
          this[firstIndex] = this[endIndex];
          this[endIndex] = temp;
          firstIndex++;
          endIndex--;
          }
      }

    return this;
};
