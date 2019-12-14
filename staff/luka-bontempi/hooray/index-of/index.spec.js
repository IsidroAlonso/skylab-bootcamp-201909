describe ('Hooray.prototype.indexOf', function () {


    it ('should return the first index where the item is found', function () {

        var hooray = new Hooray (1,2,3,4,5,6,7,8,9,0);

        expect(hooray.indexOf(5)).toBe(4);
    })

    it ("should start searching from the end when a negative starting is sent", function () {

        var hooray = new Hooray (1,2,3,4,5,6,7,8,9,0);

        expect(hooray.indexOf(3,-5)).toBe(-1);
    })

    it ("should return -1 when Item's not found", function () {

        var hooray = new Hooray (1,2,3,4,5,6,7,8,9,0);

        expect(hooray.indexOf(10)).toBe(-1);
    })

    it ('should return the first index where the item is found when a starting is specified', function () {

        var hooray = new Hooray (1,2,3,4,5,6,7,8,9,0);

        expect(hooray.indexOf(5,3)).toBe(4);
    })

    it ("should return -1 when Item's not found when a starting is specified", function () {

        var hooray = new Hooray (1,2,3,4,5,6,7,8,9,0);
        
        expect(hooray.indexOf(3,5)).toBe(-1);
    })

    it ("should return -1 when am empty hooray calls indexOf() or any item is scepecified", function () {

        var hooray = new Hooray ();
        expect(hooray.indexOf(5)).toBe(-1);

        hooray = new Hooray(1,2,3);
        expect(hooray.indexOf(5)).toBe(-1);
    })

    it ("should start searching at index 0 when a invalid starting is sent", function () {

        var hooray = new Hooray (1,2,3,4,5,6,7,8,9,0);
        expect(hooray.indexOf(3,"5")).toBe(2);
    })

    it ("shouldn't modify the original hooray", function () {

        var hooray = new Hooray (1,2,3,4);
        var test = new Hooray (1,2,3,4);


        var restult = hooray.indexOf(3);

        expect(hooray).toEqual(test);
    })
})
