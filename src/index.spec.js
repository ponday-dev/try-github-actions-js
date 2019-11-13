const inc = require('./index');

describe('inc', () => {
    it('inc 1', () => {
        expect(inc(1)).toBe(2);
    });
});

