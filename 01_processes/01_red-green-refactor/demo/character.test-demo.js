const getCharacters = require('./character');

describe('getCharacters function', () => {
  it('to return a list of rick and morty characters', async () => {
    const characters = await getCharacters();

    expect(characters).toEqual(['Rick Sanchez', 'Morty Smith', 'Summer Smith']);
  });
});
