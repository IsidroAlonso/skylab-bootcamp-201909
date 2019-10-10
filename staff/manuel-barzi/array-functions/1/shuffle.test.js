describe('shuffle', function () {
    it('should mix array with string values (staff names)', function () {
        var staff = ['adri-campo', 'adrian-zhu', 'aitor-parra', 'albert-ferrer', 'cristian-astudillo', 'diana-moreno', 'elena-rodriguez', 'fatima-mata', 'isidro-alonso', 'javier-sevilla', 'joan-luis', 'jose-rodriguez', 'luka-bontempi', 'marta-penya', 'martin-garcia', 'nacho-rivero', 'noli-pascual', 'oscar-rodriguez', 'ruben-vidales', 'xavier-navarro'];

        var randomized = shuffle(staff);

        expect(randomized === staff).toBe(false);

        expect(randomized instanceof Array).toBe(true);
        expect(randomized.length).toBe(staff.length);

        var expected = ['adri-campo', 'adrian-zhu', 'aitor-parra', 'albert-ferrer', 'cristian-astudillo', 'diana-moreno', 'elena-rodriguez', 'fatima-mata', 'isidro-alonso', 'javier-sevilla', 'joan-luis', 'jose-rodriguez', 'luka-bontempi', 'marta-penya', 'martin-garcia', 'nacho-rivero', 'noli-pascual', 'oscar-rodriguez', 'ruben-vidales', 'xavier-navarro'];
        for (var i = 0; i < staff.length; i++)
            expect(staff[i]).toBe(expected[i]);

        for (var i = 0; i < randomized.length; i++) {
            var notFound = true;

            for (var j = 0; j < staff.length && notFound; j++)
                //if (randomized[i] === numbers[j]) notFound = false;
                randomized[i] === staff[j] && (notFound = false);

            expect(notFound).toBe(false);
        }
    });

    it('should mix array with number values', function () {
        var numbers = [1, 2, 3, 4, 5];

        var randomized = shuffle(numbers);

        expect(randomized === numbers).toBe(false);

        expect(randomized instanceof Array).toBe(true);
        expect(randomized.length).toBe(numbers.length);

        var expected = [1, 2, 3, 4, 5];
        for (var i = 0; i < numbers.length; i++)
            expect(numbers[i]).toBe(expected[i]);

        for (var i = 0; i < randomized.length; i++) {
            var notFound = true;

            for (var j = 0; j < numbers.length && notFound; j++)
                //if (randomized[i] === numbers[j]) notFound = false;
                randomized[i] === numbers[j] && (notFound = false);

            expect(notFound).toBe(false);
        }
    });

    it('should mix array with number values (one repeated)', function () {
        var numbers = [1, 2, 3, 4, 5, 5];

        var randomized = [1, 1, 2, 3, 4, 5]; //shuffle(numbers); // SH*T! TODO improve the test results checking, as this situation could happen and we are not warranting the shuffle behaves as expected.

        expect(randomized === numbers).toBe(false);

        expect(randomized instanceof Array).toBe(true);
        expect(randomized.length).toBe(numbers.length);

        var expected = [1, 2, 3, 4, 5, 5];
        for (var i = 0; i < numbers.length; i++)
            expect(numbers[i]).toBe(expected[i]);

        for (var i = 0; i < randomized.length; i++) {
            var notFound = true;

            for (var j = 0; j < numbers.length && notFound; j++)
                //if (randomized[i] === numbers[j]) notFound = false;
                randomized[i] === numbers[j] && (notFound = false);

            expect(notFound).toBe(false);
        }
    });

    it('should fail on non-array input', function () {
        expect(function () { shuffle(); }).toThrow(TypeError, 'undefined is not an array');

        expect(function () { shuffle(true); }).toThrow(TypeError, 'true is not an array');

        expect(function () { shuffle(1); }).toThrow(TypeError, '1 is not an array');

        expect(function () { shuffle('a'); }).toThrow(TypeError, 'a is not an array');
    });
});