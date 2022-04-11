/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
// 二分查找
function searchInsert(nums, target) {
  let left = 0, right = nums.length - 1, currentIdx = Math.ceil(left + right);
  while (left <= right) {
    currentIdx = Math.ceil((left + right) / 2);
    if (nums[currentIdx] > target) right = currentIdx - 1;
    else if (nums[currentIdx] < target) left = currentIdx + 1;
    else return currentIdx;
  }
  return left;
};
console.log(searchInsert([-1, 3, 5, 6, 8, 9], 10));