describe('fun', function() {
    it('should fail on not a 1 input', function() {
        expect(function() { fun(2); }).toThrowError('number is not 1');
    });
});