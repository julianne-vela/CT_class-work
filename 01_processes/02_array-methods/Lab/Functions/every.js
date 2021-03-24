const every = (array, callback) => {
    for (let i = 0; i < array.length; i++) {
        if (callback(array[i], i)) {
            return true;
        }
        else if (!callback(array[i], i)) {
            return false;
        }
    }
};

module.exports = every;
