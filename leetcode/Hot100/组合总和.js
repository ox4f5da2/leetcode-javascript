/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
function combinationSum(candidates, target) {
  let path = [], result = []; // path存放搜索路径
  backTracking(0, 0);
  return result;
  function backTracking(sum, startIndex) {
    if (sum > target) return;
    else if (sum === target) {
      result.push(Array.from(path));
      return;
    }
    for (let i = startIndex; i < candidates.length; i++){
      path.push(candidates[i]);
      sum += candidates[i];
      backTracking(sum, i);
      sum -= candidates[i];
      path.pop();
    }
  }
};
console.log(combinationSum([2, 1, 3], 4));