// You should implement your task here.

module.exports = function towelSort(matrix) {
    if (arguments.length === 0 || matrix.length === 0) {
        return [];
    }

    const towelSort = matrix.reduce((acc, curr, i) => {
        if (i % 2) {
            curr.reverse();
        }
        return [...acc, ...curr];
    }, []);

    return towelSort;
};
