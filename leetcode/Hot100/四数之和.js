/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
function fourSum(nums, target) {
  let len = nums.length, result = [];
  if (len <= 3) return []; // 如果长度小于4肯定不存在解
  nums.sort((a, b) => a - b);
  // preI, preJ存储上一个循环中i, j的值，确保这次循环中i和j至少一个改变了
  // hashTable用来去重left和right相同的结果
  let preI, preJ, hashTable = {};
  for (let i = 0; i < len - 3; i++) {
    for (let j = i + 1; j < len - 2; j++) {
      if (nums[i] !== nums[preI] || nums[j] !== nums[preJ]) {
        [preI, preJ] = [i, j];
        let [left, right] = [j + 1, len - 1];
        while (left < right) {
          if (nums[i] + nums[j] + nums[left] + nums[right] < target) left++;
          else if (nums[i] + nums[j] + nums[left] + nums[right] > target) right--;
          else if (nums[i] + nums[j] + nums[left] + nums[right] === target) {
            let tmpArr = [nums[i], nums[j], nums[left], nums[right]], tmpStr = tmpArr.join(",");
            if (hashTable[tmpStr] === undefined) {
              result.push(tmpArr);
              hashTable[tmpStr] = false;
            }
            left++;
            right--;
          }
        }
      }
    }
  }
  return result;
};
console.log(fourSum([2,2,2,2,2], 8));
