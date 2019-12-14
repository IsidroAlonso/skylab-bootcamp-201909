describe('reversecowgirl', function(){

    
    it('Should succeed the operation, reversing the first item of the array to the last item and viceversa', function(){
        var array, result, expected;

        array = [1, 2, 3, 4];
        expected = [4, 3, 2, 1];
        result = reversecowgirl(array);

        console.log(array);
        console.log(result);
        
        expect(result).toEqual(expected);
        expect(result.length).toBe(4);

    });

    it('Should succeed the operation, reversing the same order when array only contains one item', function(){
        var array, result, expected;

        array = [1];
        expected = [1];
        result = reversecowgirl(array);

        console.log(array);
        console.log(result);
        
        expect(result).toEqual(expected);
        expect(result.length).toBe(1);

    });

    it('Should succeed the operation, returning the same [] when array has no items;', function(){
        var array, result, expected;

        array = [];
        expected = [];
        result = reversecowgirl(array);

        console.log(array);
        console.log(result);
        
        expect(result).toEqual(expected);
        expect(result.length).toBe(0);

    });
    
    
});  