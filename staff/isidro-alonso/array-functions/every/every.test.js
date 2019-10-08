describe('every', function () {

    it('has to confirm that at least there\'s one number greater than one of the array', function () {

        var numbers = [1, 2, 3, 4];
        var result = 0;

        var condition = function (element) { result = element > 2; };

        find(numbers, condition);

        expect(result).toBe(true);

    }, function (error) {

        expect(error).toBe(undefined);

    }

    )

    it('maaaaaaaaaaaaaaaaaaaaaaaaaaal', function () {

        var numbers = [1, 2, 3, 4];
        var result = 0;

        var condition = function (element) {if (element = 'b') false; }; // no se que estoy haciendo

        find(numbers, condition);

        expect(result).toBe(true);

    }, function (error) {

        expect(error).toBe(undefined);

    }

    )

    it('has to confirm that there are not strings on the array', function () {

        var numbers = ['a', 'b', 'c'];
        var result = 0;

        var condition = function (element) { result = element > 2; };

        find(numbers, condition);

        expect(result).toBe(true);

    }, function (error) {

        expect(error).toBe(undefined);

    }

    )

    it('maaaaaaaaaaaaaaaaaal', function () {

        var numbers = ['a', 'b', 'c'];
        var result = 0;

        var condition = function (element) { result = element = 'c'; };

        find(numbers, condition);

        expect(result).toBe(true);

    }, function (error) {

        expect(error).toBe(undefined);

    }

    )

});