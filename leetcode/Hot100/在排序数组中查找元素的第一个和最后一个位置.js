/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
// 暴力
function searchRange(nums, target) {
  let len = nums.length;
  if (len === 0) return [-1, -1];
  else if (len === 1) return target === nums[0] ? [0, 0] : [-1, -1];
  let first = -1, last = -1, flag = false;
  for (let i = 0, len = nums.length; i < len; i++) {
    if (!flag && nums[i] === target) {
      first = i;
      flag = true;
    }
    if (flag && nums[i] === target && nums[i + 1] !== target) {
      last = i;
      break;
    }
  }
  return [first, last];
};
// 二分
function searchRange(nums, target) {
  let result = [];
  // 找第一个等于target的数
  let [left, right] = [0, nums.length - 1];
  while (left < right) {
    let mid = Math.floor((left + right) / 2);
    if (nums[mid] >= target) right = mid;
    else left = mid + 1;
  }
  if (nums[right] === target) result.push(right);
  else return [-1, -1]; // 如果第一个都不存在肯定没有最后一个等于target的值
  // 找最后一个等于target的数
  [left, right] = [0, nums.length - 1];
  while (left < right) {
    let mid = Math.ceil((left + right) / 2);
    if (nums[mid] <= target) left = mid;
    else right = mid - 1;
  }
  result.push(left);
  return result;
}