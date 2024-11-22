/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var filter = function(arr, fn) {
    const op = [];
    for(let i = 0; i < arr.length; i++){
        if(fn(arr[i],i) != false){
            op.push(arr[i]);
        }
    }
    return op;
};