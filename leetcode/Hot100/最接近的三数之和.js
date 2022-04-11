/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
function threeSumClosest(nums, target) {
  nums.sort((a, b) => a - b);
  let result = 0, dis = 10 ** 4 + 3000, ifEqual = false;
  for (let i = 0, len = nums.length; i < len; i++) {
    let [left, right] = [i + 1, len - 1];
    while (left < right) {
      temp = nums[i] + nums[left] + nums[right];
      if (Math.abs(target - temp) < dis) {
        dis = Math.abs(target - temp);
        result = temp;
      }
      if (nums[i] + nums[left] + nums[right] < target) left++;
      else if (nums[i] + nums[left] + nums[right] > target) right--;
      else if (nums[i] + nums[left] + nums[right] === target) {
        result = target;
        ifEqual = true;
        break;
      }
    }
    if (ifEqual) break;
  }
  return result;
};
console.log(threeSumClosest([0, 1,2], 3));
// -4, -3, -2, -2, 0, 1, 2, 2, 3, 5, 5, 6, 7 