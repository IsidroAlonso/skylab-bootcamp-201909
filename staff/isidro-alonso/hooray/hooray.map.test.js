describe('Hooray.prototype.map', function () {

    it('should add two to each number of the hooray', function () {

        var hooray = new Hooray(1, 2, 3, 4);

        var result = hooray.map(function (x) { return x + 2 });

        var expected = [3, 4, 5, 6];

        for (var i = 0; i < result.length; i++)
            expect(result[i]).toBe(expected[i]);

        // expect().toBe();

        // expect().toBe();

    });

});