
var MyCalendar = function() {
  this.calendar = [];
};

/** 
* @param {number} start 
* @param {number} end
* @return {boolean}
*/
MyCalendar.prototype.book = function(start, end) {
let l = 0;
let r = this.calendar.length - 1;
let index = this.calendar.length;

while (l <= r) {
  const m = Math.floor((l + r) / 2);
  if (this.calendar[m][0] > start) {
    index = m;
    r = m - 1;
  } else {
    l = m + 1;
  }
}

if ((index > 0 && this.calendar[index - 1][1] > start) || 
    (index < this.calendar.length && this.calendar[index][0] < end)) {
  return false;
}

this.calendar.splice(index, 0, [start, end]);
return true;
};

/** 
* Your MyCalendar object will be instantiated and called as such:
* var obj = new MyCalendar()
* var param_1 = obj.book(start,end)
*/