/**
 * @param {number[]} nums
 * @return {boolean}
 */
// 贪心
function canJump(nums) {
  let max = 0; // 代表能到的最远的距离
  for (let i = 0, len = nums.length; i < len; i++) {
    if (i <= max) {
      max = Math.max(max, i + nums[i]);
      if (max === i && max < len - 1) {
        return false;
      }
    }
  }
  return true;
};
console.log(canJump([0]));