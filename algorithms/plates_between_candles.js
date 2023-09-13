/**
 * @param {string} s
 * @param {number[][]} queries
 * @return {number[]}
 */
var platesBetweenCandles = function(s, queries) {
  const candles = [];
  for (let i = 0; i < s.length; i++) {
    if (s[i] === '|') candles.push(i); 
  }

  const ans = [];
  for (const [leftQuery, rightQuery] of queries) {
    let leftCandle = rightCandle = -1;

    // Find leftmost candle
    let [l, r] = [0, candles.length - 1];
    while (l <= r) {
      const m = Math.floor((l + r) / 2);
      if (candles[m] >= leftQuery) {
        leftCandle = m;
        r = m - 1;
      } else {
        l = m + 1;
      }
    }

    // Find rightmost candle
    [l, r] = [0, candles.length - 1];
    while (l <= r) {
      const m = Math.floor((l + r) / 2);
      if (candles[m] <= rightQuery) {
        rightCandle = m;
        l = m + 1;
      } else {
        r = m - 1;
      }
    }

    if (leftCandle !== -1 && rightCandle !== -1 && rightCandle > leftCandle) {
      ans.push(candles[rightCandle] - candles[leftCandle] - (rightCandle - leftCandle));
    } else {
      ans.push(0);
    }
  }

  return ans;
};