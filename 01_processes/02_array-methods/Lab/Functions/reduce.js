const reduce = (array, callback, initialValue) => {
    // IV starts as ACC or 0 if no IV given
    let acc = initialValue || array[0];
    // if no IV, ACC is index0 and item is index1
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