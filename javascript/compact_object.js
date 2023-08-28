/**
 * @param {Object} obj
 * @return {Object}
 */
var compactObject = function(obj) {
  const ans = {};
  for (const key in obj) {
    const value = obj[key];
    if (typeof value === 'object' && value !== null) {
      ans[key] = compactObject(value);
    } else if (Boolean(value)) {
      ans[key] = value;
    }
  }

  return Array.isArray(obj) ? Object.values(ans) : ans;
};