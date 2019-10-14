describe ('filter', function(){

    it('should extract a new array with the elements that match the condition', function(){

        var array = [1, 2, 3, 4, 5];

        var returnProp = function (x) {return x > 3};

        var result = filter(array, returnProp);

        var expected = [4, 5];

        expect(result).toEqual(expected);

    })

    it('should extract an empty array if the elements don\'t match the condition', function(){

        var array = [1, 2, 3, 4, 5];

        var returnProp = function (x) {return x > 30};

        var result = filter(array, returnProp);

        var expected = [];

        expect(result).toEqual(expected);

    })


})