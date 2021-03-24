const every = require("../Functions/every");

describe('every function', () => {
    it('returns true if all callbacks return true, otherwise return false', () => {
        const array = [3, 9, 12, 27, 72, 759]
        const callback = n => n % 3 === 0;

        expect(every(array, callback)).toEqual(true);
    });
});
