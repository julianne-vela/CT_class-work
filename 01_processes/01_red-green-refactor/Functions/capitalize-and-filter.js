const capitalizeAndFilter = (strArray) => {
    const regEx = /^(?!F)\w+/g;
    const upperStrArray = strArray.map(str => str.toUpperCase());
    const filteredArray = upperStrArray.filter(str => str.match(regEx));
    return filteredArray;
};

module.exports = capitalizeAndFilter;
