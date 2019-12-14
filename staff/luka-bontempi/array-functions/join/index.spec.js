describe('join', function(){
    
    it('Should succeed the operation, returning a new string by joining all of the elements in an array separated by empty string or a specified separator string', function(){
        var array, result, expected;

        array = [1, 2, 3, 4];

        expected = ("1,2,3,4")
        result = join(array, '');

        
        expect(result).toEqual(expected);
    });
    
   
    it('Should succeed the operation, returning a new string by joining all of the elements in an array separated with a specified speartor ,in this case ' , function() {
        var array, result, expected;

        array = [1, 2, 3, 4];
        result = join(array, ', ');
        expected = ("1, 2, 3, 4")
        
        
        expect(result).toEqual(expected);
    });

    it('Should succeed the operation, the type of result should be string if we dont introduce any command', function() {
        var array, result, expected;

        array = [1, 2, 3, 4];
        
        result = join(array);
        expected = typeof array;

        expect(typeof result).toEqual(typeof expected);
    });  
    
});