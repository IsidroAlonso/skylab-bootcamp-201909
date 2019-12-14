describe('Hooray.prototype.find',function(){
  
    it ('should true is the element is found', function(){
       var myHooray= new Hooray(1,2,5,7, 'antonio');
       var elementFound= myHooray.find('antonio');
             
       expect(elementFound).toBe(true);
    });
 
    it ('Should false if not found a element whithin of array',function(){
       var myHooray= new Hooray(1,2,5,7, 'antonio');
       var elementFound= myHooray.find(4);
             
       expect(elementFound).toBe(false);
    });

 });