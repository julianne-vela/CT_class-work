const reduce = require("../Functions/reduce");

describe('reduce function', () => {
    it('should return the final accumulator total of all callbacks given an array and callback fn.', () => {
        const array = [2, 3, 5, 6, 4, 1, 3, 0, 9];
        const callback = (acc, n) => acc + n;

        expect(reduce(array, callback)).toEqual(33);
    });

    it('should return the final accumulator total of all callbacks beginning with the initialValue declared', () => {
        const array = [1, 2, 3, 4, 5];
        const callback = (acc, n) => acc + n;
        const initialValue = 25;

        expect(reduce(array, callback, initialValue)).toEqual(40);
    });
});
