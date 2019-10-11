describe('push', function () {

    it ('should add one number at the final of the array', function () {

        var array = [10, 20, 30];

        push(array, 40);

        var expected = [10, 20, 30, 40];

        for (var i = 0; i < expected.length; i++)
            expect(array[i]).toBe(expected[i]);
     
    })

    it ('should add various numbers at the final of the array', function () {

        var array = [10, 20, 30];

        push(array, 40, 50);

        var expected = [10, 20, 30, 40, 50];

        for (var i = 0; i < expected.length; i++)
            expect(array[i]).toBe(expected[i]);
     
    })

    it ('should add one string at the final of the array', function () {

        var array = ['a', 'b', 'c'];

        push(array, 'd');

        var expected = ['a', 'b', 'c', 'd'];

        for (var i = 0; i < expected.length; i++)
            expect(array[i]).toBe(expected[i]);
     
    })

    it ('should add various strings at the final of the array', function () {

        var array = ['a','b','c'];

        push(array, 'd', 'e', 'f');

        var expected = ['a', 'b', 'c', 'd', 'e', 'f'];

        for (var i = 0; i < expected.length; i++)
            expect(array[i]).toBe(expected[i]);
     
    })

})