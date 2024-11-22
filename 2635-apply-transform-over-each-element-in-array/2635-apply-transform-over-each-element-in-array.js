/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
const map = function(arr, fn) {
    const op = []
    for(let i = 0; i < arr.length; i++){
        op[i] = fn(arr[i], i);
    }
    return op;
};