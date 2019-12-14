/**
 * Fill the hooray to iterate with the item that you sent
 * 
 * @param {Hooray} hooray The hooray to iterate.
 * @param {*} newItem Character by which we will replace items from hooray
 * 
 */
Hooray.prototype.fill = function(newItem){
	var start = 0;
	var end = this.length;
	
	switch(arguments.length){
	  case 2:
		start = arguments[1];
		break;
	  case 3:
		start = arguments[1];
		end = arguments[2];
		break;
	  default:
		  if (arguments.length < 1 ) newItem = undefined;
		break;
	}

	for(var i = start; i < end; i++){
		this[i] = newItem;
	  }  
	  
  };
