const every = (array, callback) => {
    for (let i = 0; i < array.length; i++) {
        if (callback(array[i], i)) return true;        
    }
    return false;
};

module.exports = every;
