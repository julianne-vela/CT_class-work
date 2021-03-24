const copyAndPush = (array, newValue) => {
    // copy array
    const arrayCopy = [...array];
    // push new value to array
    arrayCopy.push(newValue);
    // return new array
    return arrayCopy;

};

module.exports = copyAndPush;
