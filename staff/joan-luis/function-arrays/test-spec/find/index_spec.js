describe ('index',function(){
   it ('Should show true if element is found',function(){
      var miArray=[1,2,3,4,5,'antonio'];
      var element=function elementFound (elemento){
         return elemento==='antonio';
      };
      expect(find(miArray,element)).toBe('antonio');

   });

   it ('Should show false if elemen is not found',function(){
      var miArray=[1,2,3,4,5,'antonio'];
      
      var element=function elementFound (elemento){
         return elemento===6;
      };
      expect(find(miArray,element)).toBe(undefined);
   });

   it ('Should show undefine if array is empty', function(){
      var miArray=[];
      var element=function elementFound (elemento){
         return elemento===4;
      };
      expect(find(miArray,element)).toBe(undefined);

   })

})