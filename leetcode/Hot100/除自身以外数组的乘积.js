/**
 * @param {number[]} nums
 * @return {number[]}
 */
function productExceptSelf(nums) {
  let leftToRight = [], rightToLeft = [], result = [], len = nums.length;
  for (let i = 0; i < len; i++) leftToRight[i] = nums[i] * (leftToRight[i - 1] === undefined ? 1 : leftToRight[i - 1]);
  for (let i = len - 1; i >= 0; i--) rightToLeft[i] = nums[i] * (rightToLeft[i + 1] === undefined ? 1 : rightToLeft[i + 1]);
  for (let i = 0; i < len; i++) result[i] = (rightToLeft[i + 1] === undefined ? 1 : rightToLeft[i + 1]) * (leftToRight[i - 1] === undefined ? 1 : leftToRight[i - 1]);
  return result;
};
console.log(productExceptSelf([2, 3, 2, 4, 5, 3]));