/**
 * @param {number[]} nums
 * @return {number[][]}
 */
function subsets(nums) {
  let result = [[]], path = [], len = nums.length;
  backTacking(0);
  return result;
  function backTacking(startIndex) {
    for (let i = startIndex; i < len; i++){
      path.push(nums[i]);
      result.push(Array.from(path));
      backTacking(i + 1);
      path.pop();
    }
  }
};
console.log(subsets([1, 2, 3]));