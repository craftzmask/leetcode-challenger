
var TimeMap = function() {
  this.histories = new Map(); 
};

/** 
* @param {string} key 
* @param {string} value 
* @param {number} timestamp
* @return {void}
*/
TimeMap.prototype.set = function(key, value, timestamp) {
 if (!this.histories.has(key)) {
   this.histories.set(key, []);
 }
 this.histories.get(key).push([timestamp, value]);
};

/** 
* @param {string} key 
* @param {number} timestamp
* @return {string}
*/
TimeMap.prototype.get = function(key, timestamp) {
 const history = this.histories.get(key);
 if (!history) return "";

 let value = "";

 let [l, r] = [0, history.length - 1];
 while (l <= r) {
   const m = Math.floor((l + r) / 2);
   if (history[m][0] <= timestamp) {
     value = history[m][1];
     l = m + 1;
   } else {
     r = m - 1;
   }
 }

 return value;
};

/** 
* Your TimeMap object will be instantiated and called as such:
* var obj = new TimeMap()
* obj.set(key,value,timestamp)
* var param_2 = obj.get(key,timestamp)
*/