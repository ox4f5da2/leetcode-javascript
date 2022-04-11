/**
 * @param {number[]} height
 * @return {number}
 */
// 双指针
function maxArea(height) {
  let [left, right] = [0, height.length - 1];
  let result = 0;
  while (left < right) {
    let tempArea = Math.min(height[left], height[right]) * (right - left);
    result = result < tempArea ? tempArea : result;
    if (height[left] <= height[right]) left++;
    else right--;
  }
  return result;
};
console.log(maxArea([1,8,6,2,5,4,8,3,7]));