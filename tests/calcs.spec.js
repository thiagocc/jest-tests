const calcs = require('../controllers/calcs');

describe('testing calcs file', () => {
    it('double function', () => {
        expect(calcs.double(5)).toBe(10);
    });

    it('concat function', () => {
        expect(calcs.concat(['Paul', ' ', 'McCartney'])).toBe('Paul McCartney');
    });
});
