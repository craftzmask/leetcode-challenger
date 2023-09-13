/**
 * @param {number} length
 */
var SnapshotArray = function(length) {
  this.histories = [];
  for (let i = 0; i < length; i++) {
    this.histories.push([[-1, 0]]);
  }
  this.snap_id = 0;
};

/** 
 * @param {number} index 
 * @param {number} val
 * @return {void}
 */
SnapshotArray.prototype.set = function(index, val) {
  this.histories[index].push([this.snap_id, val]);
};

/**
 * @return {number}
 */
SnapshotArray.prototype.snap = function() {
  this.snap_id++;
  return this.snap_id - 1;
};

/** 
 * @param {number} index 
 * @param {number} snap_id
 * @return {number}
 */
SnapshotArray.prototype.get = function(index, snap_id) {
  let [l, r, pos] = [0, this.histories[index].length - 1, -1];
  while (l <= r) {
    const m = Math.floor((l + r) / 2);
    if (this.histories[index][m][0] <= snap_id) {
      pos = m;
      l = m + 1;
    } else {
      r = m - 1;
    }
  }

  return this.histories[index][pos][1];
};

/** 
 * Your SnapshotArray object will be instantiated and called as such:
 * var obj = new SnapshotArray(length)
 * obj.set(index,val)
 * var param_2 = obj.snap()
 * var param_3 = obj.get(index,snap_id)
 */