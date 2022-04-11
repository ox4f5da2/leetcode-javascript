/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
// 单指针
function sortColors(nums) {
  let len = nums.length, point = 0;
  for (let i = 0; i < len; i++) {
    if (nums[i] === 0) {
      [nums[i], nums[point]] = [nums[point], nums[i]];
      ++point;
    }
  }
  console.log(nums);
  for (let i = point; i < len; i++) {
    if (nums[i] === 1) {
      [nums[i], nums[point]] = [nums[point], nums[i]];
      ++point;
    }
  }
  return nums;
};
console.log(sortColors([1, 2, 2, 2, 2, 0, 0, 0, 1, 1]));
// 0, 0, 0, 1, 0, 1, 1, 1, 2, 2, 2, 2, 2