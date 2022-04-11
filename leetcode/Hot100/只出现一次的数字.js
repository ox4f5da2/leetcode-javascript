/**
 * @param {number[]} nums
 * @return {number}
 */
function singleNumber(nums) {
  let result = 0;
  nums.forEach(item => result = result ^ item);
  return result;
};
console.log(singleNumber([4, 1, 2, 1, 2]));