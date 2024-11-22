/**
 * @param {integer} init
 * @return { increment: Function, decrement: Function, reset: Function }
 */
const createCounter = function(init) {
    let n = init;
    
    function increment () {
        n = n + 1;
    	return n;
    }

    function decrement () {
        n =  n - 1;
    	return n;
    }

    function reset () {
    	n = init;
    	return init;
    }

    return {
    	increment : increment,
    	decrement : decrement,
    	reset : reset,
    }
    
};

/**
 * const counter = createCounter(5)
 * counter.increment(); // 6
 * counter.reset(); // 5
 * counter.decrement(); // 4
 */