describe("Hooray.prototype.sort", function () {

    it ("should sort ascending the hooray, when no sorting function is sent", function () {

        var hooray = new Hooray (3,4,5,1,9,6);
        var test = new Hooray (1,3,4,5,6,9);

        hooray.sort();
        expect(hooray).toEqual(test);

    })

    it ("should sort the hooray, using a sort function sent as parameter", function () {

        var expression = function (a,b) { return a < b ? 1 : -1 };
        var hooray = new Hooray (3,4,5,1,9,6);
        var test = new Hooray (9,6,5,4,3,1);

        hooray.sort(expression);
        expect(hooray).toEqual(test);

    })

    it('should throw a TypeError when parameter is not a function', function () {

        var hooray = new Hooray (2,4,6);

        expect (function () { hooray.sort(2)}).toThrowError(TypeError,'2 is not a function');
        expect (function () { hooray.sort("a")}).toThrowError(TypeError,'a is not a function');
    })
})