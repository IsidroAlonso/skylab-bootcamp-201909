describe("sort", function () {

    it ("should sort ascending the array, when no sorting function is sent", function () {

        var array = [3,4,5,1,9,6];
        var test = [1,3,4,5,6,9];

       sort(array);
        expect(array).toEqual(test);

    })

    it('should fail on undefined array', function () {
        var array; //= [1, 2, 3];
        

        expect(function() { forEach(array); }).toThrowError(TypeError, 'undefined is not an array');
    });
})