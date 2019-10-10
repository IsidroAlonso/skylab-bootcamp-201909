describe('push', function () {

    it ('should add one element at the final of the array', function () {

        var array = [10, 20, 30];

        var added = 40;

        var result = push(array, added);

        expect(result).toBe([10, 20, 30, 40]);
     
    })

})