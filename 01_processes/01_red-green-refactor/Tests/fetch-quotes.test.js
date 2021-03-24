const fetchQuotes = require('../Functions/fetch-quotes');
jest.mock('node-fetch', () => () => 
    Promise.resolve({
        json: () => Promise.resolve([{
            character: 'Professor Farnsworth',
            quote: 'Now, now, there will be plenty of time to discuss your objections when and if\nyou return.',
            image: 'https://res.cloudinary.com/dzxqhkyqd/image/upload/v1554904014/farnsworth.png'
        }])
                
    }));

describe('fetch quotes function', () => {
    it('should return a single quote with character, quote, and image properties', async() => {
        const quote = await fetchQuotes();            

        expect(quote).toEqual(
            {
                name: expect.any(String),
                text: expect.any(String),
                image: expect.any(String)
            });
    });
});
