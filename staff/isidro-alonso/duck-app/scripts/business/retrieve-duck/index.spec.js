describe('business/retrieveDuck', function () {

    it('should succeed on correct duck id', function (done) {

        var id = 'numidduck';

        retrieveDuck(id, function () {
            expect(duck).toBeDefined();
            expect(duck.id).toBe(id);

            expect(duck.title).toBeDefined();
            expect(typeof duck.title).toBe('string');
            expect(duck.title.length).toBeGreaterThan(0);

            done();
        })
        
    });
});