const reduce = require("../Functions/reduce");

describe('reduce function', () => {
    it('should return the final accumulator total of all callbacks given an array and callback fn.', () => {
        const array = [2, 3, 5, 6, 4, 1, 3, 0, 9];
        const callback = (acc, n) => acc + n;

        expect(reduce(array, callback)).toEqual(33);
    });
});
