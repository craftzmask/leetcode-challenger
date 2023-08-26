/**
 * @param {Function} fn
 * @param {number} t
 * @return {Function}
 */
var timeLimit = function(fn, t) {
	return async function(...args) {
    const promiseFn = fn(...args);

    const promiseReject = new Promise((_, reject) => {
      setTimeout(reject, t, 'Time Limit Exceeded');
    })

    return await Promise.race([promiseFn, promiseReject]);
  }
};

/**
 * const limited = timeLimit((t) => new Promise(res => setTimeout(res, t)), 100);
 * limited(150).catch(console.log) // "Time Limit Exceeded" at t=100ms
 */