/**
 * @param {number[]} nums
 * @return {number}
 */
function removeDuplicates(nums) {
  let = len = nums.length;
  if (len === 0) return [];
  let lastElement = nums[0]; // 存储去重数组中最后一个元素
  let cnt = 1;
  let [slow, fast] = [0, 0];
  while (slow <= len - 1 || fast <= len - 1) {
    if (nums[fast] !== lastElement) {
      slow++;
      if (nums[slow] !== lastElement && nums[slow] !== nums[fast]) {
        nums[cnt] = nums[slow];
        cnt = nums[slow] === undefined ? cnt : cnt + 1;
      }
      nums[cnt] = nums[fast];
      cnt = nums[fast] === undefined ? cnt : cnt + 1;
      lastElement = nums[fast];
    }
    slow = fast;
    fast = fast + 2;
    console.log(slow, fast);
  }
  return cnt;
};
let nums = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4];
console.log(removeDuplicates(nums), nums);