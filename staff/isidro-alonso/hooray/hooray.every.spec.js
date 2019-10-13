describe ('Hooray.protype.every', function () {

    it('should return true', function () {

        var sequence = new Hooray(1, 2, 3, 4, 5);
        var checkValue = function (x) { return x > 2 };

        var result = sequence.every(checkValue);

        var expected = true;

        expect(result).toEqual(expected);
        expect(result).toBeInstanceOf(Boolean);

    })

    it('should return false', function () {

        var sequence = new Hooray(10, 13, 20);
        var checkValue = function (x) { return x <= -2 };

        var result = sequence.every(checkValue);

        var expected = false;

        expect(result).toEqual(expected);
        expect(result).toBeInstanceOf(Boolean);

    })

    it('should return true with only one element', function () {

        var sequence = new Hooray(20);
        var checkValue = function (x) { return x < 100};

        var result = sequence.every(checkValue);

        var expected = true;

        expect(result).toEqual(expected);
        expect(result).toBeInstanceOf(Boolean);

    })

    it('should throw an error message', function () {

        var sequence = [0];
        
        expect(function () {sequence.every(true);}).toThrowError(TypeError, 'true is not a function');

    })

});