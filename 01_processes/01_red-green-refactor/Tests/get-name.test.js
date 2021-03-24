const getName = require('../Functions/get-name');

describe('getName function', () => {
    it('should return the name of the given object', () => {
        const characterObj = {
            name: 'larry',
            profession: 'cable guy',
            id: 2
        };
        
        const name = getName(characterObj);

        expect(name).toEqual('larry');
    });
});
