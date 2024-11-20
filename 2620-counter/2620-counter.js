/**
 * @param {number} n
 * @return {Function} counter
 */

const createCounter = function(n) {
    let t = n - 1;
    return function() {
        t = t + 1;
        return t;
    }
}

/** 
 * const counter = createCounter(10)
 * counter() // 10
 * counter() // 11
 * counter() // 12
 */