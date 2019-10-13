describe('Hooray.prototype.fill', function () {

    it ('should be filled with the element the beginning to the marked end', function (){

        var hooray = new Hooray(1, 2, 3, 4, 5);

        var result = hooray.fill(0, 1, 3);

        var expected = [1, 0, 0, 4, 5];

        expect(result).toEqual(expected);

    })

    it ('should be filled with the element the beginning to the end of the hooray (no end value)', function (){

        var hooray = new Hooray(1, 2, 3, 4, 5);

        var result = hooray.fill('a', 1);

        var expected = [1, 'a', 'a', 'a', 'a'];

        expect(result).toEqual(expected);

    })

    it ('should fill all the elements of the hooray', function (){

        var hooray = new Hooray(1, 2, 3, 4, 5);

        var result = hooray.fill(5);

        var expected = [5, 5, 5, 5, 5];

        expect(result).toEqual(expected);

    })

    it('should throw an error message', function () {
        
        expect(function () {hooray.fill();}).toThrowError(ReferenceError, 'hooray is not defined');

    })

})