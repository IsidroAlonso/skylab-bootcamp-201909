describe ('indexOf', function () {


    it ('should return the first index where the item is found', function () {

        var array = [1,2,3,4,5,6];

        expect(indexOf(array, 5)).toBe(4);
    })

    it ("should return -1 when Item's not found", function () {

        var array = [1,2,3,4,5,6];

        expect(indexOf(array, 20)).toBe(-1);
    })

    it ('should return the first index where the item is found when a starting is specified', function () {

        var array = [1,2,3,4,5,6];

        expect(indexOf(array, 5,3)).toBe(4);
    })

    it ("should return -1 when am empty array calls indexOf() or any item is scepecified", function () {

        var array = [];
        expect(indexOf(array, 5)).toBe(-1);

        var array = [1,2,3,4];
        expect(indexOf(array, 5)).toBe(-1);
    })

    it ("should start searching at index 0 when a invalid starting is sent", function () {

        var array = [1,2,3,4,5,6];
        expect(indexOf(array, 3,"5")).toBe(2);
    })

    it ("shouldn't modify the original array", function () {

        var array = [1,2,3,4,5,6];
        var test = [1,2,3,4,5,6];


        var result = indexOf(array, 3);

        expect(array).toEqual(test);
    })
})