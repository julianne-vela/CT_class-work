const filter = require("../Functions/filter");

describe('filter function', () => {
    it('should create a new array with all items whose callback returned "true" or a truthy value.', () => {
        const array = [true, 'true', 12, '256', { id: 1, color: 'blue' }]
        const callback = n => typeof n === 'string';

        expect(filter(array, callback)).toEqual(['true', '256'])
    });
});