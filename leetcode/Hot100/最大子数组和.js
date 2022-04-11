/**
 * @param {number[]} nums
 * @return {number}
 */
// 动态规划
function maxSubArray(nums) {
  let len = nums.length;
  if (len === 1) return nums[0];
  let max = nums[0], sum = 0;
  for (let i = 0; i < len; i++){
    // max = Math.max(max, sum + nums[i], nums[i]);
    // sum = sum + nums[i] > nums[i] ? sum + nums[i] : nums[i];
    sum = sum + nums[i] > nums[i] ? sum + nums[i] : nums[i];
    max = max > sum ? max : sum;
  }
  return max;
};
console.log(maxSubArray([5]));