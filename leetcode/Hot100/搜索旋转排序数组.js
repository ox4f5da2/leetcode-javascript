/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
*/
// function search(nums, target) {
//   for (let i = 0; i < nums.length; i++){
//     if (nums[i] === target) return i;
//   }
//   return -1;
// };
// 二分法
function search(nums, target) {
  let len = nums.length;
  if (len === 0) return -1;
  else if (len === 1) return target === nums[0] ? 0 : -1;
  let [left, right] = [0, len - 1];
  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    if (target === nums[mid]) return mid;
    // 0 - mid升序
    if (nums[0] <= nums[mid]) {
      if (nums[0] <= target && target <= nums[mid]) {
        right = mid - 1;
      }
      else {
        left = mid + 1;
      }
    }
    // mid - len-1 升序
    else {
      if (nums[mid] <= target && target <= nums[len - 1]) {
        left = mid + 1
      }
      else {
        right = mid - 1;
      }
    }
  }
  return -1;
}