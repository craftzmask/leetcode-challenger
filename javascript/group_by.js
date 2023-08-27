/**
 * @param {Function} fn
 * @return {Array}
 */
Array.prototype.groupBy = function(fn) {
  return this.reduce((cache, el) => {
    const key = fn(el);
    if (!cache[key]) {
      cache[key] = [];
    }
    cache[key].push(el);
    return cache;
  }, {});
};

/**
 * [1,2,3].groupBy(String) // {"1":[1],"2":[2],"3":[3]}
 */