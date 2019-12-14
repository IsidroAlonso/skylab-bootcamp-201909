describe ('includes', function () {
    it ('should return true when an item is included on a array', function () {

        var array = [1,2,3,4,5,6];

        expect(includes(array, 3)).toBe(true);
    })

    it ("should return false when the item is not included", function () {

        var array = [1,2,3,4,5,6];

        expect(includes(array, 'cat')).toBe(false);
    })

    it ('should return true when an item is included on a array, when a starting is specified', function () {

        var array = [1,2,3,4,5,6];

        expect(includes(array, 2,3)).toBe(true);
    })

    it ('should return false when an item is Not included on a array, when a starting is specified', function () {

        var array = [1,2,3,4,5,6];

        expect(includes(array, 3,5)).toBe(true);
    })

    it ("should return false when am empty array calls includes()", function () {

        var array = [];

        expect(includes(array, 20)).toBe(false);
    })

    it ("should return false when any item is sent as parameter", function () {

        var array = [1,2,3,4,5,6];

        expect(includes(array)).toBe(false);
    })

    it ("shouldn't modify the original array", function () {

        var array = [1,2,3,4,5,6];
        var test = [1,2,3,4,5,6];

        var expression = function (i) { return (i<0)};

        var restult = includes(array, expression);

        expect(array).toEqual(test);
    })
})
