describe('fill', function () {

    it ('should be filled with the element the beginning to the marked end', function (){

        var array = [1, 2, 3, 4, 5];

        var result = fill(array, 0, 1, 3);

        var expected = [1, 0, 0, 4, 5];

        expect(result).toEqual(expected);

    })

    it ('should be filled with the element the beginning to the end of the array (no end value)', function (){

        var array = [1, 2, 3, 4, 5];

        var result = fill(array, 'a', 1);

        var expected = [1, 'a', 'a', 'a', 'a'];

        expect(result).toEqual(expected);

    })

    it ('should fill all the elements of the array', function (){

        var array = [1, 2, 3, 4, 5];

        var result = fill(array, 5);

        var expected = [5, 5, 5, 5, 5];

        expect(result).toEqual(expected);

    })

    it('should throw an error message', function () {
        
        expect(function () {fill(array);}).toThrowError(ReferenceError, 'array is not defined');

    })

})