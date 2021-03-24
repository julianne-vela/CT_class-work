const map = require('../Functions/map.js');
const filter = require('../Functions/filter.js');
const findIndex = require('../Functions/find-index.js');
const every = require('../Functions/every.js');

describe.skip('test indexes', () => {
    const mockCallback = jest.fn((item, index) => {
        return `Index: ${index} Item: ${item}`
    });
    
    it('should return the correct index and associated item from the map function', () => {
        const array = [3, 2, 4, 5, 7, 8, 0];
        map(array, mockCallback);
        // let callback2 = filter(array, mockCallback);
        // let callback3 = findIndex(array, mockCallback);
        // let callback4 = every(array, mockCallback);

        expect(mockCallback.mock.calls.length).toBe(7);
        expect(mockCallback.mock.results[0].value).toBe('Index: 0 Item: 3')
    });
});
