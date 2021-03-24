const copyAndPush = require('../Functions/copy-and-push');

describe('copy and push function', () => {
    it('should copy the given array and then add a new value to the array', () => {
        const fruits = ['apple', 'pear', 'kiwi'];

        const fruitBasket = copyAndPush(fruits, 'orange');

        expect(fruitBasket).toEqual([...fruits, 'orange']);
        expect(fruits).not.toContain('orange'); // original fruits array remains intact and unchanged
    });
});
