/**
 * @param {number[]} nums
 * @return {number[][]}
 */

function permute(nums) {
  let result = [], path = []; // path存取路径
  backTracking(nums);
  return result;
  function backTracking(rest) {
    if (rest.length === 0) {
      result.push(Array.from(path));
      return;
    }
    for (let i = 0; i < rest.length; i++){
      const copy = rest[i];
      path.push(copy);
      rest.splice(i, 1);
      backTracking(rest);
      rest.splice(i, 0, copy);
      path.pop();
    }
  }

};
console.log(permute([1, 2, 3]));