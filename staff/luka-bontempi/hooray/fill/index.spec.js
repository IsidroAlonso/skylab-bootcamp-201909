describe('Hooray.prototype.fill', function () {
    it('should fill the function with a value', function () {
        var hooray = new Hooray(1, 3, 4, 6, 7, 8, 6);
        hooray.fill(7);
        var expected = new Hooray(7,7,7,7,7,7,7)

        expect(hooray).toEqual(expected);
    });

    it('should fill the function with a value + startIndex', function () {
        var hooray = new Hooray(1, 3, 4, 6, 7, 8, 6);
        var start = 3;
        var expected = new Hooray(1,3,4,7,7,7,7);
        hooray.fill(7, start);

        expect(hooray).toEqual(expected);       
    });

    it('should fill the function with a value + startIndex + endIndex', function () {
        var hooray = new Hooray(1, 3, 4, 6, 7, 8, 6);
        var start = 3;
        var end = 6;
        hooray.fill(7, start, end);
        var expected = new Hooray(1,3,4,7,7,7,6);

        expect(hooray).toEqual(expected);        
    });

    it('should fill with undefined when item is not declared', function(){
        var hooray = new Hooray(1, 3);
        hooray.fill();
        var expected = new Hooray(undefined,undefined);

        expect(hooray).toEqual(expected);
    });
});
