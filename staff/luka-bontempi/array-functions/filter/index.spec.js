 
describe('filter', function () {

    it ('shoult return the items greater than 3', function () {

        var array = [1,2,3,4,5,6,7,8,9,0];
        var expresion = function (i) { return (i>3);}
        
        var results = filter(array, expresion);
        var test = [4,5,6,7,8,9];

        expect(results).toEqual(test);
    })


    it ('should return an empty array', function () {

        var array = [1,2,3,4,5,6,7,8,9,0];
        var expresion = function (i) { return (i<0);}
        
        var results = filter(array, expresion);
        var test = [];

        expect(results).toEqual(test);
    })

    it ("shouldn't modify the original Hooray", function () {

        var array = [1,2,3,4,5,6,7,8,9,0];
        var expresion = function (i) { return (i>5);}
        
        var results = filter(array, expresion);
        var test = [1,2,3,4,5,6,7,8,9,0];

        expect(array).toEqual(test);
        expect(array.length).toBe(10);
    })

    it('should fail on non-function expression', function () {
        var array = [1, 2, 3];

        expect(function () { forEach(array, undefined); }).toThrowError(TypeError, 'undefined is not a function');
        expect(function() { forEach(array, true); }).toThrowError('true is not a function');
        expect(function() { forEach(array, 1); }).toThrowError('1 is not a function');
    });
})