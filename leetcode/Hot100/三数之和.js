/**
 * @param {number[]} nums
 * @return {number[][]}
 */
// 排序 + 双指针
function threeSum(nums) {
  let afterSort = nums.sort((a, b) => a - b);
  let result = [];
  for (let i = 0, len = afterSort.length; i < len; i++){
    let [left, right] = [i + 1, len - 1];
    // afterSort[i]固定
    if (afterSort[i] <= 0 && afterSort[i] !== afterSort[i - 1]) {
      while (left < right) {
        if (afterSort[i] + afterSort[left] + afterSort[right] > 0) right--;
        else if (afterSort[i] + afterSort[left] + afterSort[right] < 0) left++;
        else if (afterSort[i] + afterSort[left] + afterSort[right] === 0) {
          result.push([afterSort[i], afterSort[left], afterSort[right]]);
          while (afterSort[left] === afterSort[++left]);
          while (afterSort[right] === afterSort[--right]);
        }
      }
    }
  }
  return result;
};
// [-4,-2,-2,-2,0,1,2,2,2,3,3,4,4,6,6]
console.log(threeSum([-4,-2,-2,-2,0,1,2,2,2,3,3,4,4,6,6]));