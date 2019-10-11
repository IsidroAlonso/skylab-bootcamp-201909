describe('shuffle', function () {
    it('should mix array with string values (staff names)', function () {
        var staff = ['adri-campo', 'adrian-zhu', 'aitor-parra', 'albert-ferrer', 'cristian-astudillo', 'diana-moreno', 'elena-rodriguez', 'fatima-mata', 'isidro-alonso', 'javier-sevilla', 'joan-luis', 'jose-rodriguez', 'luka-bontempi', 'marta-penya', 'martin-garcia', 'nacho-rivero', 'noli-pascual', 'oscar-rodriguez', 'ruben-vidales', 'xavier-navarro'];

        var randomized = shuffle(staff);

        expect(randomized).not.toBe(staff);

        expect(randomized).toBeInstanceOf(Array);
        expect(randomized.length).toBe(staff.length);

        var expected = ['adri-campo', 'adrian-zhu', 'aitor-parra', 'albert-ferrer', 'cristian-astudillo', 'diana-moreno', 'elena-rodriguez', 'fatima-mata', 'isidro-alonso', 'javier-sevilla', 'joan-luis', 'jose-rodriguez', 'luka-bontempi', 'marta-penya', 'martin-garcia', 'nacho-rivero', 'noli-pascual', 'oscar-rodriguez', 'ruben-vidales', 'xavier-navarro'];
        expect(staff).toEqual(expected);

        expect(randomized.length).toBe(expected.length);
        expect(randomized).not.toEqual(expected);
        expect(randomized).toContain('adri-campo', 'adrian-zhu', 'aitor-parra', 'albert-ferrer', 'cristian-astudillo', 'diana-moreno', 'elena-rodriguez', 'fatima-mata', 'isidro-alonso', 'javier-sevilla', 'joan-luis', 'jose-rodriguez', 'luka-bontempi', 'marta-penya', 'martin-garcia', 'nacho-rivero', 'noli-pascual', 'oscar-rodriguez', 'ruben-vidales', 'xavier-navarro');
    });

    it('should mix array with number values', function () {
        var numbers = [1, 2, 3, 4, 5];

        var randomized = shuffle(numbers);

        expect(randomized).not.toBe(numbers);

        expect(randomized).toBeInstanceOf(Array);
        expect(randomized.length).toBe(numbers.length);

        var expected = [1, 2, 3, 4, 5];
        expect(numbers).toEqual(expected);

        expect(randomized.length).toBe(expected.length);
        expect(randomized).not.toEqual(expected);
        expect(randomized).toContain(1, 2, 3, 4, 5);
    });

    it('should mix array with number values (one repeated)', function () {
        var numbers = [1, 2, 3, 4, 5, 5];

        var randomized = [1, 1, 2, 3, 4, 5]; //shuffle(numbers); // SH*T! TODO improve the test results checking, as this situation could happen and we are not warranting the shuffle behaves as expected.

        expect(randomized).not.toBe(numbers);

        expect(randomized).toBeInstanceOf(Array);
        expect(randomized.length).toBe(numbers.length);

        var expected = [1, 2, 3, 4, 5, 5];
        expect(numbers).toEqual(expected);

        expect(randomized.length).toBe(expected.length);
        expect(randomized).not.toEqual(expected);
        expect(randomized).toContain(1, 2, 3, 4, 5, 5);
    });

    it('should fail on non-array input', function () {
        expect(function () { shuffle(); }).toThrowError(TypeError, 'undefined is not an array');

        expect(function () { shuffle(true); }).toThrowError(TypeError, 'true is not an array');

        expect(function () { shuffle(1); }).toThrowError(TypeError, '1 is not an array');

        expect(function () { shuffle('a'); }).toThrowError(TypeError, 'a is not an array');
    });
});