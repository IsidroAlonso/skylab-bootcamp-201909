describe ('reduce', function () {
    it ('should return the index of the first item that acomplish the expression sent', function () {

        var array = [1,2,3,4,5];
        var expression = function (accum, item) { return accum+item};

        expect(reduce(array, expression)).toBe(15);
    })

    it ("shouldn't modify the original array", function () {

        var array = [1,2,3,4];
        var test = [1,2,3,4];

        var expression = function (accum, item) { return accum+item};

        var result = reduce(array, expression);

        expect(array).toEqual(test);
        expect(array.length).toEqual(test.length);
    })

    it('should throw a TypeError when parameter is not a function', function () {

        var array = [1,2,3,4];
       
        expect(function () { forEach(array, undefined); }).toThrowError(TypeError, 'undefined is not a function');
        expect(function() { forEach(array, true); }).toThrowError('true is not a function');
        expect(function() { forEach(array, 1); }).toThrowError('1 is not a function');
    })
})