const every = require("../Functions/every");

describe('every function', () => {
    it('should return true if all callbacks return true', () => {
        const array = [3, 9, 12, 27, 72, 759]
        const callback = n => n % 3 === 0;

        expect(every(array, callback)).toEqual(true);
    });

    it('should return false if any callback is not true', () => {
        const array = [1, 3, 6, 7, 9];
        const callback = n => n % 2 === 0;

        expect(every(array, callback)).toEqual(false);
    });
});
