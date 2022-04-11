/**
 * @param {number[]} nums
 * @return {number}
 */
function maxProduct(nums) {
  let len = nums.length;
  if (len === 1) return nums[0];
  let multiple = 1, negativeNumber = 1, max = nums[0], flag = false; // num保存第一个负数
  for (let i = 0; i < len; i++) {
    multiple *= nums[i];
    if (multiple < 0) {
      let tmp = Math.max(multiple / negativeNumber, nums[i]);
      if (!flag) {
        negativeNumber = multiple;
        flag = true;
      }
      max = tmp > max ? tmp : max;
    }
    else if (multiple === 0) {
      let tmp = (0, nums[i]);
      max = tmp > max ? tmp : max;
      multiple = 1;
      negativeNumber = 1;
      flag = false;
    }
    else {
      max = multiple > max ? multiple : max;
    }
  }
  return max;
};
console.log(maxProduct([6, 3, -10, 0, 2]));