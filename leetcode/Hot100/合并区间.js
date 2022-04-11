/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
// 把区间先按第一个数从小到大排序
function sortIntervalByLeftBound(intervals) {
  let map = new Map();
  intervals.forEach(item => {
    let res = map.get(item[0]);
    // 把相同左边界的区间先合并
    if (res === undefined || res[1] < item[1]) map.set(item[0], item);
  });
  return Array.from(map).sort((a, b) => a[0] - b[0]).map(item => item[1]);
}
function merge(intervals) {
  let afterSortIntervals = sortIntervalByLeftBound(intervals);
  let result = []
  afterSortIntervals.forEach((item, index) => {
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
console.log(merge([[1, 4], [2,3]]));