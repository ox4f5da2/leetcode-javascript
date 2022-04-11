/**
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
 */
function merge(intervals) {
  let result = []
  intervals.forEach((item, index) => {
    if (index === 0) {
      result.push(item);
    }
    else {
      let lastElement = result[result.length - 1];
      if (item[0] <= lastElement[1]) {
        if (item[1] > lastElement[1]) lastElement[1] = item[1];
      }
      else result.push(item);
    }
  });
  return result;
};
function findInsertIndex(intervals, newInterval) {
  let [left, right, target] = [0, intervals.length - 1, newInterval[0]];
  while (left < right) {
    let mid = Math.floor((left + right) / 2);
    if (intervals[mid][0] >= target) right = mid;
    else left = mid + 1
  }
  return right;
}
function insert(intervals, newInterval) {
  if (intervals.length === 0) return [newInterval];
  // 先二分找到插入点
  let insetIndex = findInsertIndex(intervals, newInterval);
  if (newInterval[0] > intervals[insetIndex][0]) intervals.splice(insetIndex + 1, 0, newInterval);
  else intervals.splice(insetIndex, 0, newInterval);
  // 将插入点之后的合并
  return merge(intervals);
};
console.log(insert(intervals = [], newInterval = [5, 7]));