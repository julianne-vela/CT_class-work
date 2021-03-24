const fetch = require('node-fetch');

const getCharacters = async () => {
  const res = await fetch('https://rickandmortyapi.com/api/character');
  const body = await res.json();

  return body.results.map((character) => character.name).slice(0, 3);
};

module.exports = getCharacters;
