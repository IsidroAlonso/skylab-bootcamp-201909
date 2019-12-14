describe ('Hooray.prototype.reduce', function () {


    it ('should return the index of the first item that acomplish the expression sent', function () {

        var hooray = new Hooray (1,2,3,4,5);
        var expression = function (accum, item) { return accum+item};

        expect(hooray.reduce(expression)).toBe(15);
    })

    it ("shouldn't modify the original hooray", function () {

        var hooray = new Hooray (1,2,3,4);
        var test = new Hooray (1,2,3,4);

        var expression = function (accum, item) { return accum+item};

        var restult = hooray.reduce(expression);

        expect(hooray).toEqual(test);
        expect(hooray.length).toEqual(test.length);
    })

    it ("should throw a TypeError when an empty hooray calls reduce()", function () {

        var hooray = new Hooray ();
        var expression = function (accum, item) { return accum+item};

        expect(function () { hooray.reduce(expression)}).toThrowError(TypeError,"Reduce of empty hooray with no initial value");
    })


    it('should throw a TypeError when parameter is not a function', function () {

        var hooray = new Hooray (2,4,6);

        expect (function () { hooray.reduce(2)}).toThrowError(TypeError,'2 is not a function');
        expect (function () { hooray.reduce("a")}).toThrowError(TypeError,'a is not a function');
        expect (function () { hooray.reduce()}).toThrowError(TypeError,'undefined is not a function');
    })
})