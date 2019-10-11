describe ('map', function () {

    it('should make the operation function that you put', function () {

        var array = [1, 2, 3];

        var expression = function(x) { return x * 3 };

        var result = map(array, expression);

        var expected = [3, 6, 9];

        expect(array.length).toBe(expected.length);
        expect(result).toEqual(expected);
        expect(array).not.toBe(expected);

    })

})