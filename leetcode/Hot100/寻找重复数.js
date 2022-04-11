/**
 * @param {number[]} nums
 * @return {number}
 */
// 把数组看成链表,下标和数值对应
function findDuplicate(nums) {
  let [slow, fast] = [0, 0];
  do {
    slow = nums[slow];
    fast = nums[nums[fast]];
  } while (nums[slow] !== nums[fast]);
  fast = 0;
  while (nums[slow] !== nums[fast]) {
    slow = nums[slow];
    fast = nums[fast];
  }
  return nums[slow]
};
console.log(findDuplicate([1, 3, 4, 2, 2]));