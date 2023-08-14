/**
 * @param {Function} fn
 */
function memoize(fn) {
  const cache  = new Map();
  return function(...args) {
    const inputs = JSON.stringify(args);
    if (!cache.has(inputs)) {
      cache.set(inputs, fn(...args));
    }
    return cache.get(inputs);
  }
}


/** 
 * let callCount = 0;
 * const memoizedFn = memoize(function (a, b) {
 *	 callCount += 1;
 *   return a + b;
 * })
 * memoizedFn(2, 3) // 5
 * memoizedFn(2, 3) // 5
 * console.log(callCount) // 1 
 */