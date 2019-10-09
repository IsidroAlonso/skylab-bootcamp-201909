describe('slice', function () {

    it('', function (){

        var array = [1, 2, 3, 4];
        function expression () {};

        var result = slice(array, 1, 3);

        expect(result).toBe([2, 3]);

    }, function (error) {

        expect(error).toBe(undefined);

    }
    
    )

});