/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
*/
// 将数组用快速排序排序
function findKthLargest(nums, k) {
  quickSort(0, nums.length - 1);
  return nums[k - 1];
  function quickSort(left, right) {
    if (left >= right) return;
    let copyLeft = left, copyRight = right;
    while (left < right) {
      while (left < right && nums[right] <= nums[copyLeft]) right--;
      while (left < right && nums[left] >= nums[copyLeft]) left++;
      [nums[left], nums[right]] = [nums[right], nums[left]];
    }
    [nums[copyLeft], nums[left]] = [nums[left], nums[copyLeft]];
    quickSort(copyLeft, left - 1);
    quickSort(left + 1, copyRight);
  }
};
// 基于快速排序的选择排序
function findKthLargest(nums, k) {
  let result;
  quickSort(0, nums.length - 1);
  return result;
  function quickSort(left, right) {
    if (left > right) return;
    let [copyLeft, copyRight] = [left, right];
    while (left < right) {
      while (left < right && nums[right] <= nums[copyLeft]) right--;
      while (left < right && nums[left] >= nums[copyLeft]) left++;
      [nums[left], nums[right]] = [nums[right], nums[left]];
    }
    [nums[copyLeft], nums[left]] = [nums[left], nums[copyLeft]];
    if (left === k - 1) result = nums[left];
    else if (left > k - 1) quickSort(copyLeft, left - 1);
    else if (left < k - 1) quickSort(left + 1, copyRight);
  }
}
console.log(findKthLargest([3, 2, 3, 1, 2, 4, 5, 5, 6], 4));