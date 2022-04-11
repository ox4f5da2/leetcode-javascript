/**
 * @param {number[]} nums
 * @return {number}
 */
function majorityElement(nums) {
  let map = new Map(), targetNum = Math.floor(nums.length / 2) + 1, result;
  nums.forEach(item => {
    let res = map.get(item);
    if (res) map.set(item, res + 1);
    else map.set(item, 1);
  });
  let entries = Array.from(map.entries());
  for (let item of entries) {
    if (item[1] >= targetNum) {
      result = item[0];
      break;
    }
  }
  return result
};
console.log(majorityElement([2, 2, 1, 1, 1, 2, 2]));