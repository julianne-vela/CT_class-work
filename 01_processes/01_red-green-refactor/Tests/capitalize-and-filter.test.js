const capitalizeAndFilter = require('../Functions/capitalize-and-filter');

describe('capitalize and filter function', () => {
    it('should receive an array of strings, capitalize all strings and then filter out any that begin with F/f', () => {
        const strArray = [
            'foxy',
            'faux',
            'glam',
            'luscious',
            'flamboyant',
            'lauded',
            'charming',
            'elegant'
        ];

        const filteredArray = capitalizeAndFilter(strArray);

        expect(filteredArray).toEqual(['GLAM', 'LUSCIOUS', 'LAUDED', 'CHARMING', 'ELEGANT']);
    });
});
