const findIndex = require("../Functions/find-index");

describe('find index function', () => {
    it('should return the index of the first item whose callback returns "true" or a truthy value.', () => {
        const array = [2, 3, 4, 2, 5, 6, 8];
        const callback = n => n % 2 !== 0;

        expect(findIndex(array, callback)).toEqual(1);
    });

    it('should return -1 if no item is found', () => {
        const array = ['blue', 'yellow', 'green', 'darkred']
        const callback = n => n === 'red';

        expect(findIndex(array, callback)).toEqual(-1);
    });
});
