describe('splice', function() {
    it('should return a new array adding one element in the specific position', function() {
        var months = ['Jan', 'March', 'April', 'June'];
        var result = splice(months,1, 0, 'Feb');

        expect(result).not.toBe(months);
        expect(months[1]).toBe('Feb');
        expect(months).toContain('Jan', 'Feb', 'March', 'April', 'June');
    });
    it('should return a new array adding more than one elements in the specific position', function() {
        var months = ['Jan', 'March', 'April', 'June'];
        var result = splice(months, 1, 0, 'Feb','Dic');

        expect(result).not.toBe(months);
        expect(months[1],months[2]).toBe('Feb','Dic');
        expect(months).toContain('Jan', 'Feb','Dic', 'March', 'April', 'June');
    });
    it('should return a new empty array if no parameters are included', function() {
        var months = ['Jan', 'March', 'April', 'June'];
        var result = splice(months);

        expect(result).not.toBe(months);
        expect(result.length).toBe(0);
    });
    it('should return a new array with the elements eliminated from the original array', function() {
        var months = ['Jan', 'March', 'April', 'June'];
        var result = splice(months, 1, 2);

        expect(result).not.toBe(months);
        expect(result.length).toBe(2);
        expect(result[0], result[1]).toBe('March', 'April');
        expect(months).toBe['Jan', 'June'];
      
       
    });

    it('should delete all elements after the index (index included)', function() {
        var months = ['Jan', 'March', 'April', 'June'];
        var result = splice(months, 1);

        expect(result).not.toBe(months);
        expect(result.length).toBe(3);
        expect(result).toContain('March', 'April', 'June');
        expect(months).toContain('Jan');     
    });

    it('should remove one element from index -2', function() {
        var months = ['Jan', 'March', 'April', 'June'];
        var result = splice(months, -2,1);

        expect(result).not.toBe(months);
        expect(result.length).toBe(1); 
        expect(months.length).toBe(3);
        expect(result).toContain('April');
        expect(months).toContain('Jan', 'March', 'June');     
    });
   
});