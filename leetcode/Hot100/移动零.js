/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
function moveZeroes(nums) {
  let [i, j, len] = [0, 0, nums.length];
  while (nums[i] !== 0 && i < len) {
    i++;
    j++;
  }
  while (j < len) {
    while (nums[j] === 0) {
      j++;
    }
    if(nums[j] !== undefined) [nums[i], nums[j]] = [nums[j], nums[i]];
    i++;
    j++;
  }
};
moveZeroes([0,0, 1, 2, 0,3,0,4,0,5,0,6,7]);