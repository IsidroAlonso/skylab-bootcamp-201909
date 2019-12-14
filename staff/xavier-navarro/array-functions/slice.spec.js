describe('slice', function () {
    it('should return a new array with the values in the given limits', function () {
        var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

        var result = slice(numbers, 3, 7);

        expect(result).not.toBe(numbers);
        expect(result).toBeInstanceOf(Array);

        var expected = [1, 2, 3, 4, 5, 6, 7, 8, 9];
        expect(numbers).toEqual(expected);

        expected = [4, 5, 6, 7];
        expect(result).toEqual(expected);
    });

    it('should return a new array with the values in from the beginning (no ending)', function () {
        var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

        var result = slice(numbers, 2);

        expect(result).not.toBe(numbers);
        expect(result).toBeInstanceOf(Array);

        var expected = [1, 2, 3, 4, 5, 6, 7, 8, 9];
        expect(numbers).toEqual(expected);

        expected = [3, 4, 5, 6, 7, 8, 9];
        expect(result).toEqual(expected);
    });

    it('should return a new empty array (from an empty array) from a beginning (no ending)', function () {
        var numbers = [];

        var result = slice(numbers, 12);

        expect(result).not.toBe(numbers);
        expect(result).toBeInstanceOf(Array);

        expect(result.length).toBe(0);
    });

    it('should return a new array with the same values of the original array when no beginning and no ending', function () {
        var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

        var result = slice(numbers);

        expect(result).not.toBe(numbers);
        expect(result).toBeInstanceOf(Array);

        var expected = [1, 2, 3, 4, 5, 6, 7, 8, 9];
        expect(numbers).toEqual(expected);

        expected = [1, 2, 3, 4, 5, 6, 7, 8, 9];
        expect(result).toEqual(expected);
    });

    it('should return a new array with the last values of the original array when beginning is negative and no ending', function () {
        var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

        var result = slice(numbers, -4);

        expect(result).not.toBe(numbers);
        expect(result).toBeInstanceOf(Array);

        var expected = [1, 2, 3, 4, 5, 6, 7, 8, 9];
        expect(numbers).toEqual(expected);

        expected = [6, 7, 8, 9];
        expect(result).toEqual(expected);
    });

    it('should return a new array with values of the original array from the beginning and ending, both negatives', function () {
        var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

        var result = slice(numbers, -7, -3);

        expect(result).not.toBe(numbers);
        expect(result).toBeInstanceOf(Array);

        var expected = [1, 2, 3, 4, 5, 6, 7, 8, 9];
        expect(numbers).toEqual(expected);

        expected = [3, 4, 5, 6];
        expect(result).toEqual(expected);
    });

    it('should return a new array with no values when the beginning and ending are both negatives and ending < beginning', function () {
        var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

        var result = slice(numbers, -3, -7);

        expect(result).not.toBe(numbers);
        expect(result).toBeInstanceOf(Array);

        var expected = [1, 2, 3, 4, 5, 6, 7, 8, 9];
        expect(numbers).toEqual(expected);

        expect(result.length).toBe(0);
    });

    it('should fail on first parameter non-array', function () {
        expect(function () { slice(); }).toThrowError(TypeError, 'undefined is not an array');

        expect(function () { slice(true); }).toThrowError(TypeError, 'true is not an array');

        expect(function () { slice(1); }).toThrowError(TypeError, '1 is not an array');

        expect(function () { slice('a'); }).toThrowError(TypeError, 'a is not an array');
    });
});