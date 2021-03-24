const fetch = require('node-fetch');

const fetchQuotes = async() => {
    const res = await fetch('http://futuramaapi.herokuapp.com/api/quotes/1');

    const [{ character: name, quote: text, image }] = await res.json();
    
    return {
        name,
        text,
        image
    };
};

module.exports = fetchQuotes;
