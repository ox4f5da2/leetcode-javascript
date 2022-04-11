/**
 * @param {number} n
 * @return {number}
 */
// 递归
function climbStairs(n) {
  if (n === 1) return 1;
  else if (n === 2) return 2;
  return climbStairs(n - 1) + climbStairs(n - 2);
};
// 动态规划
function climbStairs(n) {
  let dp = [1, 2];
  for (let i = 2; i < n; i++) dp[i] = dp[i - 1] + dp[i - 2];
  return dp[n - 1];
};
console.log(climbStairs(45));