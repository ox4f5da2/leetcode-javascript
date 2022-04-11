/**
 * @param {number[]} nums
 * @return {number}
 */
function longestConsecutive(nums) {
  let map = new Map(), result = 0;
  for (let i = 0; i < nums.length; i++){
    map.set(nums[i], true);
  }
  for (let i = 0; i < nums.length; i++){
    if (!map.has(nums[i] - 1)) {
      let targetNum = nums[i], cnt = 1;
      while (map.has(targetNum + 1)) {
        targetNum++;
        cnt++;
      }
      result = cnt > result ? cnt : result;
    }
  }
  return result;
};
console.log(longestConsecutive([100, 4,4, 200, 1, 3, 2,3,3]));