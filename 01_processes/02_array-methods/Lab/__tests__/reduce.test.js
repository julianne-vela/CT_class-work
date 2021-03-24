const reduce = require("../Functions/reduce");

describe('reduce function', () => {
    it('should add each callback return value to the next function call and return the final acc total.', () => {
        const array = [2, 3, 5, 6, 4, 1, 3, 0, 9];
        const callback = (acc, n) => acc + n;

        expect(reduce(array, callback)).toEqual(28);
    });
});
