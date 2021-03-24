const reduce = (array, callback, acc = 0) => {
    for (let i = 0; i < array.length; i++) {
        if (callback(acc, i)) {
            let acc = array[1];

        }
        else {
            let acc = i;

        }

        
    }
};

module.exports = reduce;