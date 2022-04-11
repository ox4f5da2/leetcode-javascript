/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
/*
  1. 从右往左找到第一个顺序组合,即左边的数(num1)小于右边的数(num2)
  2. 把num1插入到右边的序列中,同时把插入点位置上的数(num3)与原本(num1)位置上的数互换
  3. 这样num3右边的数都是逆序的,只要把逆序数改为正序就可以了
  4. 这样就完成了找到下一个排列
*/
function nextPermutation(nums) {
  let len = nums.length;
  if (len === 1) return nums;
  else if (len === 2) return nums.reverse();
  let index = len - 1;
  // 实现第一步
  while (nums[index - 1] >= nums[index--]);
  console.log(index);
  if (index < 0) return nums.reverse();
  // 实现第二步
  let target;
  for (var i = index + 1; i < len; i++) {
    if (nums[i] <= nums[index]) {
      target = i;
      break;
    }
  }
  if (i === len) target = len;
  [nums[index], nums[target - 1]] = [nums[target - 1], nums[index]];
  // 双指针实现第三步
  [left, right] = [index + 1, len - 1];
  while (left <= right) {
    [nums[left], nums[right]] = [nums[right], nums[left]];
    left++;
    right--;
  }
  // 实现第四步
  return nums;
};
console.log(nextPermutation([2, 1, 3]));