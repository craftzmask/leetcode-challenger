/**
 * @param {Array} arr1
 * @param {Array} arr2
 * @return {Array}
 */
var join = function(arr1, arr2) {
  const ans = new Map();

  for (const a of arr1) {
    ans.set(a.id, a);
  }

  for (const a of arr2) {
    if (ans.has(a.id)) {
      ans.set(a.id, {...ans.get(a.id), ...a});
    } else {
      ans.set(a.id, a);
    }
  }

  return Array
    .from(ans.values())
    .sort((a, b) => a.id - b.id);
};