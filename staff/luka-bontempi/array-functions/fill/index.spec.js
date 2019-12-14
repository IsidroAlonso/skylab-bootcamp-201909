describe('fill', function () {
    it('should fill the function with a value', function () {
        var array = [1, 3, 4, 6, 7, 8, 6];
        fill(array, 7);
        
        expect(array).toEqual([7,7,7,7,7,7,7]);
    });

    it('should fill the function with a value + startIndex', function () {
        var array = [1, 3, 4, 6, 7, 8, 6];
        var start = 3;
        fill(array, 7, start);
        
        expect(array).toEqual([1,3,4,7,7,7,7]);       
    });

    it('should fill the function with a value + startIndex + endIndex', function () {
        var array = [1, 3, 4, 6, 7, 8, 6];
        var start = 3;
        var end = 6;
        fill(array, 7, start, end);
       
        expect(array).toEqual([1,3,4,7,7,7,6]);        
    });

    it('should fill with undefined when item is not declared', function(){
        var array = [1, 3];
        fill(array);
        
        expect(array).toEqual([undefined,undefined]);
    });

// ERRORES
    it('should fail if array is NOT an array', function () {
        var array; //= [1, 3, 4, 6, 7, 8, 6];
        var item = 3;

        expect(function() { fill(array,item);}).toThrowError(TypeError, array + ' is not an array');
    });

    it('should fail on NULL array', function () {
        var array = null; //= [1, 3, 4, 6, 7, 8, 6];
        var item = 3;

        expect(function() { fill(array,item);}).toThrowError(TypeError, array + ' is not an array');
    });
});