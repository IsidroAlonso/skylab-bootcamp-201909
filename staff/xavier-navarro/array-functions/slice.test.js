describe('slice', function () {
    it('should return a new array with the values in the given limits', function () {
        var numbers = [1,2,3,4,5,6,7,8,9];
        var result = slice(numbers,3,7);
        var expected = [4,5,6];
        expect(result === numbers).toBe(false);
        expect(result).toBe([10,2,25,5,'abc','adios','hola'].toString());
    });
});