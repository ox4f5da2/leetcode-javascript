/**
 * @param {number[]} nums
 * @return {number}
 */
// 回溯: 超时
function lengthOfLIS(nums) {
  let path = [], result = 0, len = nums.length;
  if (len === 1) return 1;
  backTracking(0);
  return result;
  function backTracking(startIndex) {
    let pathLen = path.length;
    if (path[pathLen - 1] <= path[pathLen - 2]) return;
    if (len - startIndex < result && path.length === 1) return;
    console.log(path);
    result = pathLen > result ? pathLen : result;
    for (let i = startIndex; i < len; i++) {
      path.push(nums[i]);
      backTracking(i + 1);
      path.pop();
    }
  }
};
// 动态规划
function lengthOfLIS(nums) {
  let dp = [], result = 1;
  for (let i = 0, len = nums.length; i < len; i++) {
    dp[i] = 1;
    let max = 0;
    for (let j = 0; j < i; j++) {
      if (nums[j] < nums[i]) {
        max = max > dp[j] ? max : dp[j];
      }
    }
    dp[i] = max + dp[i];
    result = dp[i] > result ? dp[i] : result;
    console.log(dp);
  }
  return result;
}
console.log(lengthOfLIS([1, 3, 6, 7, 9, 4, 10, 5, 6]));