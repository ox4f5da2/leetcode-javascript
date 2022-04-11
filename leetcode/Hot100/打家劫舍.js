/**
 * @param {number[]} nums
 * @return {number}
 */
function rob(nums) {
  let dp = [];
  nums.forEach((item, index) => {
    if (index === 0) dp[0] = item;
    else if (index === 1) dp[1] = dp[0] > item ? dp[0] : item;
    else dp[index] = Math.max(dp[index - 2] + item, dp[index - 1]);
  })
  return dp[dp.length - 1];
};
console.log(rob([1, 2, 4, 2, 2, 7, 3]));