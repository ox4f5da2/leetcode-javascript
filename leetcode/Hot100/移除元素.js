/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
function removeElement(nums, val) {
  let rest = cnt = 0;
  for (let i = 0, len = nums.length; i < len; i++){
    if (nums[i] !== val) {
      nums[i - cnt] = nums[i];
      rest++;
    }
    else {
      cnt++;
    }
  }
  return rest;
};
let nums = [0, 1, 2, 2, 3, 0, 4, 2];
console.log(removeElement(nums, 2), nums);