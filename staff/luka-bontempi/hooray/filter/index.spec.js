describe('Hooray.prototype.filter', function () {

    it ('shoult return the items greater than 3', function () {

        var hooray = new Hooray (1,2,3,4,5,6,7,8,9,0);
        var expresion = function (i) { return (i>3);}
        
        var results = hooray.filter(expresion);
        var test = new Hooray (4,5,6,7,8,9);

        expect(results).toEqual(test);
    })


    it ('should return an empty Hooray', function () {

        var hooray = new Hooray (1,2,3,4,5,6,7,8,9,0);
        var expresion = function (i) { return (i<0);}
        
        var results = hooray.filter(expresion);
        var test = new Hooray ();

        expect(results).toEqual(test);
    })

    it ("shouldn't modify the original Hooray", function () {

        var hooray = new Hooray (1,2,3,4,5,6,7,8,9,0);
        var expresion = function (i) { return (i>5);}
        
        var results = hooray.filter(expresion);
        var test = new Hooray (1,2,3,4,5,6,7,8,9,0);

        expect(hooray).toEqual(test);
        expect(hooray.length).toBe(10);
    })

    it ('should throw a Type error on a non-function provided as a parameter', function () {

        var hooray = new Hooray (2,4,6);

        expect (function () { hooray.filter(2)}).toThrowError(TypeError,'2 is not a function');
        expect (function () { hooray.filter("a")}).toThrowError(TypeError,'a is not a function');
        expect (function () { hooray.filter()}).toThrowError(TypeError,'undefined is not a function');

    })
})