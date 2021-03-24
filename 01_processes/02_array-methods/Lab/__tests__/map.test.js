const map = require("../Functions/map.js");

describe('map function', () => {
    it('should return the value of each called callback fn', () => {
        const array = ['World', 'Juli', 'John', 'Chris', 'Kat', 'Devon'];
        const callback = (n) => 'Hello ' + n;
        expect(map(array, callback)).toEqual([
            'Hello World',
            'Hello Juli',
            'Hello John',
            'Hello Chris',
            'Hello Kat',
            'Hello Devon'
        ])
    })
});
