describe ('every', function () {

    it('should return true', function () {

        var sequence = [1, 2, 3, 4, 5];
        var checkValue = function (x) { return x > 2 };

        var result = every(sequence, checkValue);

        var expected = true;

        expect(result).toEqual(expected);
        expect(sequence).toBeInstanceOf(Array);
        expect(result).toBeInstanceOf(Boolean);

    })

    it('should return false', function () {

        var sequence = [10, 13, 20];
        var checkValue = function (x) { return x <= -2 };

        var result = every(sequence, checkValue);

        var expected = false;

        expect(result).toEqual(expected);
        expect(sequence).toBeInstanceOf(Array);
        expect(result).toBeInstanceOf(Boolean);

    })

    it('should return true with only one element', function () {

        var sequence = [20];
        var checkValue = function (x) { return x < 100};

        var result = every(sequence, checkValue);

        var expected = true;

        expect(result).toEqual(expected);
        expect(sequence).toBeInstanceOf(Array);
        expect(result).toBeInstanceOf(Boolean);

    })

    it('should throw an error message', function () {

        var sequence = [0];
        
        expect(function () {every(sequence, true);}).toThrowError(TypeError, 'expression is not a function');

    })

});