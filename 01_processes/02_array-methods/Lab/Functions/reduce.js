const reduce = (array, callback, initialValue) => {
    let acc = initialValue || array[0];
    if (!initialValue) {
        for (let i = 1; i < array.length; i++) {
            acc = callback(acc, array[i], i);
        }
    }
    else {
        for (let i = 0; i < array.length; i++) {
            acc = callback(acc, array[i], i)
        }
    }
    return acc;
};

module.exports = reduce;